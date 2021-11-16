from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from ControlList.py import *
import xml.etree.ElementTree as ET

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = "static/"

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/upload", methods=['GET', 'POST'])
def keymapFileParse():
    s = ""

    if request.method == 'POST':
        f = request.files['keymapFile']
        filename = secure_filename(f.filename)
        f.save(app.config['UPLOAD_FOLDER'] + filename)
        bindFile = open(app.config['UPLOAD_FOLDER'] + filename, "r")
        tree = ET.parse(bindFile)
        root = tree.getroot()
        for child in root:
            print(child.tag, child.attrib)
            for gchild in child:
                if gchild.tag == 'Primary':
                    #TODO sanitize inputs so its not vuln. to code injection
                        s += "<div class=\"controls\">" + child.tag + "<div>" + gchild.attrib.get('Key') + "</div>" "</div>"

    return render_template("binds.html", controls = s)

    bindFile.close()

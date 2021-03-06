from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
from ControlList     import *
import xml.etree.ElementTree as ET
import json

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = "static/"

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/upload", methods=['GET', 'POST'])
def keymapFileParse():
    s = ""
    readList = []
    keyBinds = {}
    invertToggles = {}
    deadzoneSlider = {}
    axisBindings = {}
    baseControls = {}
    if request.method == 'POST':
        preset = request.form.get('preset')
        f = request.files['keymapFile']
        filename = secure_filename(f.filename)
        f.save(app.config['UPLOAD_FOLDER'] + filename)
        bindFile = open(app.config['UPLOAD_FOLDER'] + filename, "r")
        tree = ET.parse(bindFile)
        root = tree.getroot()
        for child in root:
            for gchild in child:
                if gchild.tag == 'Primary' or gchild.tag == 'Secondary':
                    #TODO sanitize inputs so its not vuln. to code injection
                        #s += "<div class=\"controls\">" + child.tag + "<div>" + gchild.attrib.get('Key') + "</div>" "</div>"
                        readList += child
                        if gchild.attrib['Device'] == "Keyboard":
                            keyBinds[child.tag] = gchild.attrib['Key']

                if gchild.tag == 'Binding':
                    if gchild.attrib['Device'] == "Mouse":
                        axisBindings[child.tag] = gchild.attrib['Key']
                if gchild.tag == 'Inverted':
                    invertToggles[child.tag] = gchild.attrib['Value']
                if gchild.tag == 'Deadzone':
                    deadzoneSlider[child.tag] = gchild.attrib['Value']
                else:
                    pass
            if 'Value' in child.attrib:
                baseControls[child.tag] = child.attrib['Value']

        bindsJSON = json.dumps(keyBinds)
        invertTogglesPartTwo = json.dumps(invertToggles)
        deadzoneSlider = json.dumps(deadzoneSlider)
        return render_template("binds.html", invertTogglesPartTwo = invertTogglesPartTwo, bindsJSON = bindsJSON, deadzoneSlider = deadzoneSlider, axisBindings = axisBindings, baseControls = baseControls)
    else:
        return render_template("binds.html")

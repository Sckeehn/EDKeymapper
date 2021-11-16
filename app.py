from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import xml.etree.ElementTree as ET

app = Flask(__name__)

app.config["UPLOAD_FOLDER"] = "static/"

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/upload", methods=['GET', 'POST'])
def keymapFileParse():
    s = ""
    flightList = ['YawLeftButton', 'YawRightButton', 'YawToRollButton', 'RollLeftButton', 'RollRightButton', 'PitchUpButton', 'PitchDownButton', 'LeftThrustButton', 'RightThrustButton', 'UpThrustButton', 'DownThrustButton', 'ForwardThrustButton', 'BackwardThrustButton', 'UseAlternateFlightValuesToggle', 'ToggleReverseThrottleInput', 'ForwardKey', 'BackwardKey', 'SetSpeedMinus100', 'SetSpeedMinus75', 'SetSpeedMinus50', 'SetSpeedMinus25', 'SetSpeedZero', 'SetSpeed25', 'SetSpeed50', 'SetSpeed75', 'SetSpeed100', 'YawLeftButton_Landing', 'YawRightButton_Landing', 'PitchUpButton_Landing', 'PitchDownButton_Landing', 'RollLeftButton_Landing', 'RollRightButton_Landing', 'LeftThrustButton_Landing', 'RightThrustButton_Landing', 'UpThrustButton_Landing', 'DownThrustButton_Landing', 'ForwardThrustButton_Landing', 'BackwardThrustButton_Landing', 'ToggleFlightAssist', 'UseBoostJuice', 'HyperSuperCombination', 'Supercruise', 'Hyperspace', 'DisableRotationCorrectToggle', 'IncreaseEnginesPower', 'IncreaseWeaponsPower', 'IncreaseSystemsPower', 'ResetPowerDistribution']
    targetingWeaponsList = ['SelectTarget', 'CycleNextTarget', 'CyclePreviousTarget', 'SelectHighestThreat', 'CycleNextHostileTarget', 'CyclePreviousHostileTarget', 'TargetWingman0', 'TargetWingman1', 'TargetWingman2', 'SelectTargetsTarget', 'WingNavLock', 'CycleNextSubsystem', 'CyclePreviousSubsystem', 'TargetNextRouteSystem', 'PrimaryFire', 'SecondaryFire', 'CycleFireGroupNext', 'CycleFireGroupPrevious', 'DeployHardpointToggle', 'ToggleButtonUpInput', 'DeployHeatSink', 'ShipSpotLightToggle', 'RadarIncreaseRange', 'RadarDecreaseRange']
    SRVList = []
    miscList = []

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
                        s += "<div class=\"controls\">" + child.tag + "<div>" + gchild.attrib.get('Key') + "</div>" "</div>"

    return render_template("binds.html", controls = s)

    bindFile.close()

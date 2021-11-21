import xml.etree.ElementTree as ET

list = []
tree = ET.parse('Default.binds')
root = tree.getroot()
for child in root:
    for gchild in child:
        if 'Key' in gchild.attrib:
            print (gchild.attrib['Key'])
        if gchild.tag == 'Primary' or 'Secondary':
            s = child.tag
            list.append(s)
print(list)

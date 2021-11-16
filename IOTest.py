import xml.etree.ElementTree as ET

list = []
tree = ET.parse('Default.binds')
root = tree.getroot()
for child in root:
    for gchild in child:
        if gchild.tag == 'Primary':
            s = child.tag
            list.append(s)
print(list)

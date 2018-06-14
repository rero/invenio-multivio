#!/usr/bin/python3
# -*- coding: utf-8 -*-
from poppler import _mypoppler
from PIL import Image
import string
import io


def find_sublist(sub, list):
    indices = []
    if not list:
        return -1
    if not sub:
        return 0
    first, rest = sub[0], sub[1:]
    pos = 0
    try:
        while True:
            pos = list.index(first, pos) + 1
            if not rest or list[pos:pos+len(rest)] == rest:
                indices.append(pos - 1)
    except ValueError:
        return indices


# TEST EXTRACTION
print('############################## START ####################################')
res_Search = [[], []]
d = _mypoppler.Document(('./../../samples-tests/document.pdf').encode('utf-8'))
print('No of pages', d.no_of_pages)
stringToFind = "multivio".lower()
text = 'Mot Recherché -->'
print(text, stringToFind)
print()
for p in d:
    for f in p:
        for b in f:
            for l in b:
                if stringToFind in l.text.lower():
                    temp = ""
                    bboxTemp = []
                    tmpListe = []
                    bboxList = []
                    isFirsCaracter = True
                    for i in range(len(l.text)):
                        if (l.text[i] in string.punctuation) or (l.text[i] in ' '):
                            if temp != "":
                                tmpListe.append(temp)
                                bboxList.append(bboxTemp)
                            temp = ""
                            bboxTemp = []
                            isFirsCaracter = True
                        else:
                            temp += l.text[i].lower()
                            if isFirsCaracter is True:
                                bboxTemp = list(l.char_bboxes[i].as_tuple())
                                isFirsCaracter = False
                            else:
                                bboxTemp[2] = l.char_bboxes[i].x2
                    if temp != "":
                        tmpListe.append(temp)
                        bboxList.append(bboxTemp)
                    if ' ' in stringToFind:
                        words = stringToFind.split(' ')
                        indices = find_sublist(words, tmpListe)
                        for j in indices:
                            bboxRes = list([bboxList[j][0], bboxList[j][1],
                                            bboxList[j+len(words)-1][2], bboxList[j][3]])
                            res_Search[0].append(bboxRes)   # BBox
                            res_Search[1].append(p.page_no)
                    else:
                        indices = [i for i, s in enumerate(
                            tmpListe) if stringToFind in s]
                        for i in indices:
                            res_Search[0].append(bboxList[i])   # BBox
                            res_Search[1].append(p.page_no)     # Page
                    print(l.text,
                          '(%0.2f, %0.2f, %0.2f, %0.2f)' % l.bbox.as_tuple())
                    print()
                    # assert l.char_fonts.comp_ratio < 1.0
                    # for i in range(len(l.text)):
                    #     print(l.text[i].encode('UTF-8'), '(%0.2f, %0.2f, %0.2f, %0.2f)' %
                    #           l.char_bboxes[i].as_tuple(),)

print()
print("Print Results search")
print(res_Search)
print()
# TOC TEST
print("TOC:")
print(d._getToc())
print()

# TOC TEST
print("DOC INFO:")
print(d._getInfo2())
print()
#
# print("DOC INFO_MY:")
# print(d._getInfo())
# print()

print("Image generation ...")
im = d.get_image(1)
# print("Scale:")
# print(im._getScale())
new_width = im._getWidth()
new_height = im._getHeight()
image_data = im._getBitmap()
# print(new_width)
# print(new_height)
# print(type(image_data))
pil = Image.frombytes('RGB', (new_width, new_height), image_data)
temp_file = io.BytesIO()
pil.save("out.jpg", "JPEG", quality=100)
print("Image OK")
# temp_file.seek(0)
# content = temp_file.read()


# p = d.get_page(1)

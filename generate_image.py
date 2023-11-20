import os

# folder path
dir_path = r'D:\code\uic-dining-hall-navigation\assets\ai-images'

js_file_contet = ""

# list to store files
res = []
# Iterate directory
for file in os.listdir(dir_path):
    # check only text files
    if file.endswith('.jpg'):
        js_file_contet += "\""+file.split(".")[0]+"\": require(\"../assets/ai-images/"+file.split(".")[0]+".jpg\"),\n"

outfile = open("all_images.js", "w")
outfile.write(js_file_contet)
outfile.close()
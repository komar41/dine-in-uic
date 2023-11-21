import os

# folder path
dir_path = r'C:\Users\Gustavo\code\uic-dining-hall-navigation\assets\ai-images'

js_file_contet = ""

# list to store files
res = []

# Iterate directory
for file in os.listdir(dir_path):
    # check only text files
    if file.endswith('.jpg'):

        os.rename("./assets/ai-images/"+file, "./assets/ai-images/"+file.replace(" ","").replace(":","").replace(",","").replace("'",""))
        js_file_contet += "\""+file.split(".")[0].replace(" ","").replace(":", "").replace(",","").replace("'","").replace(".", "")+"\": require(\"../assets/ai-images/"+file.split(".")[0].replace(" ","").replace(":","").replace(",","").replace("'","").replace(".", "")+".jpg\"),\n"

outfile = open("all_images.js", "w")
outfile.write(js_file_contet)
outfile.close()
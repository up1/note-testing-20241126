*** Settings ***
Library           SeleniumLibrary

*** Variables ***
${UPLOAD_URL}    http://nervgh.github.io/pages/angular-file-upload/examples/simple/

*** Test Cases ***
Upload 3 files with success
    เข้ามายังหน้า upload file
    Choose File	   xpath://div[1]/input[2]	  ${CURDIR}/1.txt
    Choose File	   xpath://div[1]/input[2]	  ${CURDIR}/2.txt
    Choose File	   xpath://div[1]/input[2]	  ${CURDIR}/3.txt
    


*** Keywords ***
เข้ามายังหน้า upload file
    Open Browser   ${UPLOAD_URL}     browser=chrome 
    ...    options=add_experimental_option("detach", True);add_argument("--allow-running-insecure-content")
    Maximize Browser Window
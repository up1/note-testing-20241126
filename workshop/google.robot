*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${MY_URL}    https://www.google.com

*** Test Cases ***
Success case สำหรับการค้นหาคำว่า robot ใน google.com
    [Tags]   done
    เข้าไปยัง google.com
    ค้นหาคำว่า "robot"
    ตรวจสอบว่าผลลัพธ์ที่ได้มีคำว่า robot อยู่ในหน้าเว็บ

Success case สำหรับการค้นหาคำว่า playwright ใน google.com
    [Tags]   testing
    เข้าไปยัง google.com
    ค้นหาคำว่า "playwright"
    ตรวจสอบว่าผลลัพธ์ที่ได้มีคำว่า playwright อยู่ในหน้าเว็บ

*** Keywords ***
ค้นหาคำว่า "${keyword}"
    Input Text    name:q    ${keyword}
    Press Keys    name:q    RETURN

ตรวจสอบว่าผลลัพธ์ที่ได้มีคำว่า ${expected result} อยู่ในหน้าเว็บ
    Wait Until Page Contains    ${expected result}
    ${data}=   Get Text   xpath://*[@id="rso"]/div[1]
    Log to Console    ${data}

เข้าไปยัง google.com
    Open Browser    ${MY_URL}    browser=chrome   
    ...    options=add_experimental_option("detach", True) 
    Maximize Browser Window  
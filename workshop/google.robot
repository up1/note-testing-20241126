*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${MY_URL}    https://www.google.com

*** Test Cases ***
Success case สำหรับการค้นหาคำว่า robot ใน google.com
    เข้าไปยัง google.com
    ค้นหาคำว่า robot
    ตรวจสอบว่าผลลัพธ์ที่ได้มีคำว่า robot อยู่ในหน้าเว็บ

*** Keywords ***
ตรวจสอบว่าผลลัพธ์ที่ได้มีคำว่า robot อยู่ในหน้าเว็บ
    Wait Until Page Contains    robot
    ${data}=   Get Text   xpath://*[@id="rso"]/div[1]
    Log to Console    ${data}

ค้นหาคำว่า robot
    Input Text    name:q    robot
    Press Keys    name:q    RETURN

เข้าไปยัง google.com
    Open Browser    ${MY_URL}    browser=chrome  
    Maximize Browser Window  
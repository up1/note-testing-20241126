*** Settings ***
Library           SeleniumLibrary

*** Test Cases ***
Wrong username
    Open login page
    Login with user=demo2 and password=mode
    Show error message

*** Keywords ***
Show error message
    Wait Until Page Contains Element    xpath://*[@data-test="page_name"]
    Wait Until Element Contains    xpath://*[@data-test="page_name"]    Error Page

Login with user=${username} and password=${password}
    Input Text      id=username_field    ${username}
    Input Text      id=password_field    ${password}
    Click Element    id=login_button

Open login page
    Open Browser    https://demo-login-workshop.vercel.app    browser=chrome
    Maximize Browser Window
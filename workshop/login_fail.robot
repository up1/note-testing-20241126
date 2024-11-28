*** Settings ***
Library           SeleniumLibrary
Test Template     Flow of login fail

*** Test Cases ***
#------------------------------------------------
# Name                     |  Username | Password
#------------------------------------------------
Wrong username                 demo2     mode
Wrong password                 demo      mode2
Wrong username and password    demo2     mode2
Empty username                 ${EMPTY}  mode
Username with 2 space          ${SPACE*2}  mode

*** Keywords ***
Flow of login fail
    [Arguments]  ${username}    ${password}
    Open login page
    Login with user=${username} and password=${password}
    Show error message


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
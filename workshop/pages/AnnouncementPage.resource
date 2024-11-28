*** Keywords ***
Check opened page correctly
    Wait Until Element Is Visible   id:announceModal
    Wait Until Element Contains    id:exampleModalLabel    แจ้งข่าวสาร

ดูรายละเอียดของช่วงเวลาทำการให้บริการ
    Click Link   รายละเอียด
    Switch Window   NEW

Close Annoncement Page
    Click Element   xpath://*[@id="announceModal"]/div/div/div[1]/button

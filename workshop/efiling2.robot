*** Settings ***
Library           SeleniumLibrary
Resource          ./pages/MainPage.resource
Resource          ./pages/AnnouncementPage.resource
Resource          ./pages/BankPage.resource

*** Test Cases ***
Failure case :: ผู้ใช้งานทำการเข้าใช้งานระบบ efiling
    เข้ามายังระบบ efiling
    อ่านรายละเอียดการประกาศเกี่ยวกับเวลาเปิดปิดการให้บริการ ATM on Internet
    ทำการลงชื่อเข้าใช้งาน เพื่อยืนแบบ online ด้วย RD ID
    ผู้ใช้งานเจอ error message ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง

*** Keywords ***
เข้ามายังระบบ efiling
    MainPage.Open Main Page

ทำการลงชื่อเข้าใช้งาน เพื่อยืนแบบ online ด้วย RD ID
    Click Element  xpath://*[@id="top"]/div/div[2]/button[1]

อ่านรายละเอียดการประกาศเกี่ยวกับเวลาเปิดปิดการให้บริการ ATM on Internet
    AnnouncementPage.Check opened page correctly
    AnnouncementPage.ดูรายละเอียดของช่วงเวลาทำการให้บริการ
    BankPage.Verify ATM on Internet
    Switch Window   MAIN
    AnnouncementPage.Close Annoncement Page



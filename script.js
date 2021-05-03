let helloWorldPopup;

// Open the Website when we enter a given zone

helloWorldPopup = WA.onEnterZone('StreamingZone', () => {
    WA.openCoWebsite("http://localhost/streampopup.html", [{
        

// Close Website when we leave the zone.

WA.onLeaveZone('StreamingZone', () => {
    helloWorldPopup.close();
});


let Exit;

// Exit to webpage when we enter a given zone
Exit = WA.onEnterZone('ExitZone', () => {
    WA.goToPage('http://www.strassenmeyer.de/NDR-DEMO_02/index.htm?media=Foyer_NDR');  
});

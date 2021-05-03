let streampopup;

// Open the Website when we enter a given zone

streampopup = WA.onEnterZone('StreamingZone', () => {
    WA.openCoWebsite("streampopup.html", [{
        

// Close Website when we leave the zone.

WA.onLeaveZone('StreamingZone', () => {
    streampopup.close();
});


let Exit;

// Exit to webpage when we enter a given zone
Exit = WA.onEnterZone('ExitZone', () => {
    WA.goToPage('http://www.strassenmeyer.de/NDR-DEMO_02/index.htm?media=Foyer_NDR');  
});

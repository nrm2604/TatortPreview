let streampopup;

// Open the Website when we enter a given zone

streampopup = WA.onEnterZone('StreamingZone', () => {
    WA.openCoWebSite("streampopup.html");
        });

console.log("TEST");

let Exit;

// Exit to webpage when we enter a given zone
Exit = WA.onEnterZone('ExitZone', () => {
    WA.goToPage('http://www.strassenmeyer.de/NDR-DEMO_02/index.htm?media=Foyer_NDR');  
});

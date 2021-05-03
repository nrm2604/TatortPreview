let StreamPopup;

// Open the popup when we enter a given zone
StreamPopup = WA.onEnterZone('StreamingZone', () => {
    WA.openPopup("popupRectangle", WA.openTab('https://vimeo.com/event/949260/embed/90aa3a1dd0'), [{
        label: "Schliessen",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.

            WA.closeCoWebSite();
            popup.close();

        }
    }])
});


// Close the popup when we leave the zone.
WA.onLeaveZone('StreamingZone', () => {
    closeCoWebSite();
    StreamPopup.close();
});



let Exit;

// Exit to webpage when we enter a given zone
Exit = WA.onEnterZone('ExitZone', () => {
    WA.goToPage('http://www.strassenmeyer.de/NDR-DEMO_02/index.htm?media=Foyer_NDR');  
});

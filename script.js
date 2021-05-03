let StreamPopup;

// Open the popup when we enter a given zone
StreamPopup = WA.onEnterZone('StreamingZone', () => {
    WA.openPopup("popupRectangle", 'Wir können auch Popup!'), [{
        label: "Schliessen",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.

            popup.close();

        }
    }])
});


// Close the popup when we leave the zone.
WA.onLeaveZone('StreamingZone', () => {
    WA.closeTab();
    StreamPopup.close();
});

let StreamTab
StreamTab = WA.onEnterZone('TabZone'() => {
    WA.openTab('https://vimeo.com/event/949260/embed/90aa3a1dd0')
});

let Exit;

// Exit to webpage when we enter a given zone
Exit = WA.onEnterZone('ExitZone', () => {
    WA.goToPage('http://www.strassenmeyer.de/NDR-DEMO_02/index.htm?media=Foyer_NDR');  
});

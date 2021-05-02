class Popup {
    /**
     * Closes the popup
     */
    close() { };
}

let helloWorldPopup;

// Open the popup when we enter a given zone
helloWorldPopup = WA.onEnterZone('popup', () => {
    WA.openPopup("popupRectangle", 'Hello world!', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    });
}]);

// Close the popup when we leave the zone.
WA.onLeaveZone('popup', () => {
    helloWorldPopup.close();
});
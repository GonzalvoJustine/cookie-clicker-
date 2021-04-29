import React from 'react';

export default function Options() {

  return (
    <div className='PageOptions'>
      <h2>Options</h2>
      <section>
        <h3>General</h3>
        <p>Save manually (the game autosaves every 60 seconds; shortcut : ctrl+S)</p>
        <p>You can use this to backup your save or to transfer it to another computer (shortcut for import : ctrl+O)</p>
        <p>Use this to keep backups on your computer</p>
        <p>Delete all your progress, including your achievements</p>
      </section>
      <section>
        <h3>Settings</h3>
        <p>(visual improvements; disabling may improve performance)</p>
        <p>(cutting-edge visual improvements; disabling may improve performance)</p>
        <p>(cookies falling down, etc; disabling may improve performance)</p>
        <p>(numbers that pop up when clicking the cookie)</p>
        <p>(only appears with enought achievements)</p>
        <p>(visual display of your cursors)</p>
        <p>(how your cookie sounds when you click on it)</p>
        <p>(display boxes around upgrades and achievements in stats)</p>
        <p>(your cookies are displayed using a monospace font)</p>
        <p>(shorten big numbers)</p>
        <p>(notifications disappear much faster)</p>
        <p>(the game will ask you to confirm when you close the window)</p>
        <p>(the game will be less resource-intensive when out of focus)</p>
        <p>(add Mute buttons on buildings)</p>
        <p>(the game will ask you to confirm before spending sugar lumps)</p>
        <p>(some grandmas will be named after Patreon supporters)</p>
        <p>(on slower computers, the game will put itself mode when it's inactive and starts to lag out; outline CpS production kiks in during sleep mode)</p>
        <p>(view and delete save data created by mods)</p>
      </section>
    </div>
  );

}
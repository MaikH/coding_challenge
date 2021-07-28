# TICKETS

<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-1: Load existing notes from server</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>high</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>-</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want to see all notes saved on the server in the Workspace on page load.</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>all notes provided by the API endpoint (http://localhost:3002/notes) are received</li>
                <li>all notes are represented with correct color, size, position and content</li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-2: Render media notes as image</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>high</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>DEV-1</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want to see the provided URL of media notes as an image.</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>notes of type media should be represented by an image</li>
                <li>media notes can be dragged</li>
                <li>colors are ignored for media notes</li>
                <li>media notes can't be edited</li>
                <li>text notes are still behaving the same</li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-3: Use correct Note type definition</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Improvement</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>normal</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>-</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a developer I want to benefit from typescript when working with notes</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>Note-Type is defined correctly</li>
                <li>`any` is no more longer used in type definitions</li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-4: Add locked mode to the workshop</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>normal</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>-</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want lock all notes of the workspace by clicking the 'lock'-icon in the header</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>clicking on the 'lock'-icon toggles the locking-mode</li>
                <li>when active, the 'lock'-icon is highlighted by a red border</li>
                <li>when active, the notes can't be dragged or modified</li>
                <li>when active, the notes are highlighted as locked (if no design is available, propose a styling concept)</li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-5: Update note position on drag end</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>normal</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>DEV-1</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want position changes of notes persisted on page reload</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>position changes are saved on the server</li>
                <li>on page reload the notes are rendered on the new positions</li>
                <li>:information_source: the corresponding backend endpoint already exists (see README.md)</li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-6: Update note content on change</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>normal</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>DEV-1</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want text changes of notes persisted on page reload</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>text changes are saved on the server</li>
                <li>on page reload the notes are rendered with the correct content</li>
                <li>:information_source: the corresponding backend endpoint already exists (see README.md)</li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-7: Update note order</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>high</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>DEV-1</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want the latest dragged note be in front of other notes to see them correctly when overlapping</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>the last dragged note is always rendered in the front</li>
                <li>the order is defined by the order of the latest dragged notes</li>
                <li>:WARNING: the order has NOT to be kept after page reload (see DEV-8)</li>
                <li>Optional:
                    <ul>
                        <li>the notes order is persisted on the server</li>
                        <li>on page reload the order is still visible</li>
                        <li>:information_source: the corresponding backend endpoint already exists (see README.md)</li>
                    </ul>
                </li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-8: Add text note to workspace</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>high</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>DEV-1</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want to add new notes to the workspace by clicking the '+'-icon in the header</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>clicking on the '+' adds a new note to the workspace</li>
                <li>the newly created note is placed in the upper left corner</li>
                <li>the note contains a default text and random colors</li>
                <li>Optional:
                    <ul>
                        <li>the note is persisted on the server</li>
                        <li>on page reload the new notes are still visible</li>
                        <li>:information_source: the corresponding backend endpoint already exists (see README.md)</li>
                    </ul>
                </li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>
<br>
<table style="width: 100%;">
    <thead>
        <tr>
            <th colspan=2>DEV-9: Hide text and media notes from the workspace</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><strong>Type</strongb></td>
            <td>Story</td>
        </tr>
        <tr>
            <td><strong>Priority</strongb></td>
            <td>low</td>
        </tr>
        <tr>
            <td><strong>Blocked by</strongb></td>
            <td>-</td>
        </tr>
        <tr>
            <td><strong>Estimation</strongb></td>
            <td></td>
        </tr>
        <tr>
            <td colspan=2><strong>Description</strongb></td>
        </tr>
        <tr>
            <td colspan=2>As a user I want to hide notes based on the note-type from the workspace by clicking the 'text'/'media'-icons in the header</td>
        </tr>
        <tr>
            <td colspan=2><strong>Acceptance Criteria</strongb></td>
        </tr>
        <tr>
            <td colspan=2>
              <ol>
                <li>clicking on the 'text'-icon toggles the hide-mode of text notes</li>
                <li>clicking on the 'media'-icon toggles the hide-mode of media notes</li>
                <li>when active, the corresponding icon is highlighted by a red border</li>
                <li>when active, the notes of the corresponding note-type are hidden</li>
              </ol>
            </td>
        </tr>
    </tbody>
</table>

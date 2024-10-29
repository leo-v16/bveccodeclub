I have changed up the way in which the team member cards are rendered<br>
They can now be managed using firebase console<br>
This is done by using Firebase Firestore(for member details) and Storage(for images)<br>

The team details are stored as follows<br>
DATA ARRANGEMENT:
__________________________________________________________________________________________________________________________________________
<pre>Firebase Firestore > colletion(team-members) > documennt([member-position]) > collection([fields]
                                                                                   name: [name-of-member]
                                                                                   position: [position-of-member]
                                                                                   image: [image-link-of-member-from-firebase-storage]
                                                                                   linkedin: [linkedin-profile-link]
                                                                                   github: [github-profile-link]
                                                                                   facebook: [facebook-profile-link]
                                                                                   instagram: [instagram-profile-link]
)</pre>
_________________________________________________________________________________________________________________________________________

SECURITY RULES:
--------------------------------------------------------------------------------------------------------------------------------------------
rules_version = '2';<br>
service cloud.firestore {<br>
  match /databases/{database}/documents {<br>
    match /team-members/{document=**} {<br>
      allow read: if true; // Allow read access to all users<br>
      allow write: if false; // Disallow write access for now<br>
    }<br>
  }<br>
}<br>
-------------------------------------------------------------------------------------------------------------------------------------------

I have changed up the way in which the team member cards are rendered<br>
They can now be managed using firebase console<br>
This is done by using Firebase Firestore(for member details) and Storage(for images)<br>

The team details are stored as follows<br>
DATA ARRANGEMENT:
----------------------------------------------------------------------------------------------------------------------------------------
<pre>Firebase Firestore > colletion(team-members) > documennt([member-position]) > collection([fields]
                                                                                   name: [name-of-member]
                                                                                   position: [position-of-member]
                                                                                   image: [image-link-of-member-from-firebase-storage]
                                                                                   linkedin: [linkedin-profile-link]
                                                                                   github: [github-profile-link]
                                                                                   facebook: [facebook-profile-link]
                                                                                   instagram: [instagram-profile-link]
)</pre>
----------------------------------------------------------------------------------------------------------------------------------------
<img src="https://firebasestorage.googleapis.com/v0/b/bvec-code-club-dev.appspot.com/o/public-images%2FScreenshot%20(32).png?alt=media&token=28ab6065-ad09-464b-9442-9b55192e27af">
<br>

SECURITY RULES:
________________________________________________________________________________________________________________________________________
<pre>
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /team-members/{document=**} {
      allow read: if true; // Allow read access to all users
      allow write: if false; // Disallow write access for now
    }
  }
}
</pre>
________________________________________________________________________________________________________________________________________

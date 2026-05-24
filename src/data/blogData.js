const blogPosts = [
  {
    slug: "recovering-lost-notes",
    title: "How I Used Claude to Recover My Lost Notes",
    date: "October 2025",
    excerpt:
      "I bought a new Mac and somewhere in the iCloud sync, all my notes disappeared. Here's how I got them back.",
    heroImage: "/assets/blog/notes-recovery-hero.png",
    content: [
      {
        type: "paragraph",
        text: "I'd just got a new MacBook. Signed into iCloud, let everything sync."
      },
      {
        type: "paragraph",
        text: "Somewhere in that process, something broke. I opened Notes the next morning and found them empty. Years of meeting notes, project ideas, code snippets. All gone. I still don't know exactly what went wrong. I think the new machine overwrote before the old one finished uploading."
      },
      {
        type: "heading",
        text: "Finding the Local DB"
      },
      {
        type: "paragraph",
        text: "I started digging around the filesystem, looking for anything Notes might have left behind."
      },
      {
        type: "paragraph",
        text: "Turns out Apple Notes keeps a SQLite database on disk at ~/Library/Group Containers/group.com.apple.notes/. The file is called NoteStore.sqlite. Even with iCloud, this local copy is what the app actually reads from."
      },
      {
        type: "paragraph",
        text: "I opened it in DB Browser for SQLite and started running queries. The full notes weren't there. But I could see broken titles, fragments of content. Enough to know the data hadn't been fully wiped. There was a possibility."
      },
      {
        type: "heading",
        text: "The Attempt"
      },
      {
        type: "paragraph",
        text: "Backed up the old database. Cleared the current Notes directory. Restarted the app."
      },
      {
        type: "code",
        language: "bash",
        text: "cp NoteStore.sqlite ~/Desktop/NoteStore-backup.sqlite\nrm -rf ~/Library/Group\\ Containers/group.com.apple.notes/*"
      },
      {
        type: "paragraph",
        text: "Notes generated a fresh, empty NoteStore.sqlite. Now I had two databases: the new empty one my macOS expected, and the old one with all my data."
      },
      {
        type: "paragraph",
        text: "Tried dropping the old one in directly. Notes crashed. The schema had changed between macOS versions. New columns, new constraints. The data was there but the app couldn't read it."
      },
      {
        type: "heading",
        text: "Claude"
      },
      {
        type: "paragraph",
        text: "I brought both databases to Claude. It ran integrity checks and compared the schemas. The old database image couldn't work with the new files at all, access issues, version mismatches. But the data inside was intact. The only option was to extract just the data and migrate it into the new format."
      },
      {
        type: "paragraph",
        text: "Claude generated a migration script that did exactly that. Pulled the data out of the old backup, fit it into the new schema, and output a third file: NoteStore-recovered.sqlite."
      },
      {
        type: "paragraph",
        text: "Dropped it in. Opened Notes. Everything was back. I remember just scrolling through the list, reading note titles I'd forgotten I'd written."
      },
      {
        type: "heading",
        text: "Back to iCloud"
      },
      {
        type: "paragraph",
        text: "The recovered notes were local only. iCloud still thought I had nothing."
      },
      {
        type: "paragraph",
        text: "Turned on \"On My Mac\" in Notes settings. Moved everything to that local folder. Some notes were locked, some were shared, so I had to go through them one by one."
      },
      {
        type: "paragraph",
        text: "Reconnected WiFi. iCloud confirmed: empty. Moved notes back to iCloud in small batches over about an hour. By the end, everything was syncing again."
      },
      {
        type: "heading",
        text: "Takeaway"
      },
      {
        type: "paragraph",
        text: "iCloud is a sync service. It mirrors what you have. If what you have becomes nothing, it mirrors that too."
      },
      {
        type: "paragraph",
        text: "I keep real backups now. And if you ever lose your Notes, check your disk. The SQLite file might still be there."
      }
    ]
  }
];

export default blogPosts;

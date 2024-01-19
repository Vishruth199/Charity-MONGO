db.admins.insertOne({
  username: "adminUsername",
  password: "hashedPassword", // Use a tool or code to hash the actual password before storing it
  email: "admin@example.com",
  mobile: 1234567890
});


Choose your admin collection and add a new document with the admin credentials.
import { Link } from "react-router";


const contacts = [
  {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    address: {
      street: "123 Main St",
      city: "Springfield",
      state: "IL",
      zip: "62704",
      country: "USA"
    },
    socialMedia: {
      twitter: "@johndoe",
      linkedIn: "linkedin.com/in/johndoe",
      github: "github.com/johndoe"
    },
    tags: ["friend", "developer", "JavaScript"],
    createdAt: "2024-11-28T10:30:00.000Z",
    notes: "Met at the JavaScript conference."
  },
  {
    name: "Jane Smith",
    email: "janesmith@example.com",
    phone: "+9876543210",
    address: {
      street: "456 Elm St",
      city: "Metropolis",
      state: "NY",
      zip: "10001",
      country: "USA"
    },
    socialMedia: {
      twitter: "@janesmith",
      linkedIn: "linkedin.com/in/janesmith",
      github: "github.com/janesmith"
    },
    tags: ["colleague", "React", "designer"],
    createdAt: "2024-11-28T11:15:00.000Z",
    notes: "Collaborated on a React project."
  },
  {
    name: "Ali Khan",
    email: "alikhan@example.com",
    phone: "+923001234567",
    address: {
      street: "789 Maple Rd",
      city: "Karachi",
      state: "Sindh",
      zip: "74000",
      country: "Pakistan"
    },
    socialMedia: {
      twitter: "@alikhan",
      linkedIn: "linkedin.com/in/alikhan",
      github: "github.com/alikhan"
    },
    tags: ["friend", "developer", "Next.js"],
    createdAt: "2024-11-28T12:00:00.000Z",
    notes: "Discussed Next.js state management strategies."
  }
];


function Contacts() {
  return (<>
    <div>Contacts</div>
    {contacts.map((user)=>(

      <Link key={user.name} to={`/contacts/${user.email}`} className="pr-4" >{user.name}</Link>
    ))}
  </>
  )
}

export default Contacts
import { useSearchParams } from "react-router-dom";

function Users() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get page number from URL
  const pageFromURL = Number(searchParams.get("page")) || 1;

  const users = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      age: 25,
      city: "Bengaluru",
    },
    {
      id: 2,
      name: "Priya Singh",
      email: "priya@gmail.com",
      age: 24,
      city: "Mumbai",
    },
    {
      id: 3,
      name: "Amit Kumar",
      email: "amit@gmail.com",
      age: 28,
      city: "Delhi",
    },
    {
      id: 4,
      name: "Sneha Patil",
      email: "sneha@gmail.com",
      age: 23,
      city: "Pune",
    },
    {
      id: 5,
      name: "Arjun Reddy",
      email: "arjun@gmail.com",
      age: 27,
      city: "Hyderabad",
    },
    {
      id: 6,
      name: "Neha Joshi",
      email: "neha@gmail.com",
      age: 26,
      city: "Chennai",
    },
    {
      id: 7,
      name: "Vikram Rao",
      email: "vikram@gmail.com",
      age: 30,
      city: "Mysuru",
    },
    {
      id: 8,
      name: "Anjali Verma",
      email: "anjali@gmail.com",
      age: 22,
      city: "Jaipur",
    },
    {
      id: 9,
      name: "Karan Mehta",
      email: "karan@gmail.com",
      age: 29,
      city: "Ahmedabad",
    },
    {
      id: 10,
      name: "Pooja Nair",
      email: "pooja@gmail.com",
      age: 25,
      city: "Kochi",
    },
    {
      id: 11,
      name: "Rohit Gupta",
      email: "rohit@gmail.com",
      age: 31,
      city: "Lucknow",
    },
    {
      id: 12,
      name: "Kavya Rao",
      email: "kavya@gmail.com",
      age: 24,
      city: "Mangaluru",
    },
    {
      id: 13,
      name: "Manish Kumar",
      email: "manish@gmail.com",
      age: 27,
      city: "Patna",
    },
    {
      id: 14,
      name: "Divya Shah",
      email: "divya@gmail.com",
      age: 26,
      city: "Surat",
    },
    {
      id: 15,
      name: "Suresh Babu",
      email: "suresh@gmail.com",
      age: 32,
      city: "Coimbatore",
    },
    {
      id: 16,
      name: "Meena Devi",
      email: "meena@gmail.com",
      age: 23,
      city: "Chandigarh",
    },
    {
      id: 17,
      name: "Akash Patel",
      email: "akash@gmail.com",
      age: 28,
      city: "Vadodara",
    },
    {
      id: 18,
      name: "Nisha Kapoor",
      email: "nisha@gmail.com",
      age: 25,
      city: "Amritsar",
    },
    {
      id: 19,
      name: "Deepak Singh",
      email: "deepak@gmail.com",
      age: 30,
      city: "Noida",
    },
    {
      id: 20,
      name: "Riya Das",
      email: "riya@gmail.com",
      age: 22,
      city: "Kolkata",
    },
  ];

  // Number of records per page
  const recordsPerPage = 5;

  // Total pages
  const totalPages = Math.ceil(users.length / recordsPerPage);

  // Make sure page is within valid range
  const currentPage = Math.min(
    Math.max(pageFromURL, 1),
    totalPages
  );

  // Calculate records
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentUsers = users.slice(
    startIndex,
    startIndex + recordsPerPage
  );

  // Change page
  const changePage = (page) => {
    setSearchParams({ page: page.toString() });
  };

  return (
    <div className="users-container">
      <div className="header">
        <h1>User Management</h1>

        <p>
          Showing 5 users per page using useSearchParams
        </p>
      </div>

      {/* User Cards */}

      <div className="user-grid">
        {currentUsers.map((user) => (
          <div className="user-card" key={user.id}>
            <div className="user-id">
              #{user.id}
            </div>

            <h2>{user.name}</h2>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Age:</strong> {user.age}
            </p>

            <p>
              <strong>City:</strong> {user.city}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}

      <div className="pagination">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ← Previous
        </button>

        <span>
          Page <strong>{currentPage}</strong> of{" "}
          <strong>{totalPages}</strong>
        </span>

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next →
        </button>
      </div>
    </div>
  );
}

export default Users;
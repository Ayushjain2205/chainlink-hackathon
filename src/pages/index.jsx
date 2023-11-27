import { useRouter } from "next/router";
import TelegramLoginButton, { TelegramUser } from "telegram-login-button";

export default function Home() {
  const router = useRouter();
  const { id, first_name, last_name, username, photo_url, auth_date, hash } =
    router.query;

  const isLoggedIn = Boolean(id); // Check if user is logged in based on the presence of 'id'

  const UserCard = () => (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        borderRadius: "5px",
        marginTop: "20px",
      }}
    >
      <h3>User Information</h3>
      {id && (
        <p>
          <strong>ID:</strong> {id}
        </p>
      )}
      {first_name && (
        <p>
          <strong>First Name:</strong> {first_name}
        </p>
      )}
      {last_name && (
        <p>
          <strong>Last Name:</strong> {last_name}
        </p>
      )}
      {username && (
        <p>
          <strong>Username:</strong> {username}
        </p>
      )}
      {photo_url && (
        <div>
          <strong>Photo:</strong>{" "}
          <img
            src={decodeURIComponent(photo_url)}
            alt="User Photo"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </div>
      )}
      {auth_date && (
        <p>
          <strong>Auth Date:</strong>{" "}
          {new Date(Number(auth_date) * 1000).toLocaleString()}
        </p>
      )}
      {hash && (
        <p>
          <strong>Hash:</strong> {hash}
        </p>
      )}
    </div>
  );

  return (
    <main>
      {!isLoggedIn && (
        <TelegramLoginButton
          botName="EntropyTesting_Bot"
          dataOnauth={(user) => console.log(user)}
          dataAuthUrl="https://6f54-2406-7400-63-1b8a-c878-c7f-ff08-9f43.ngrok-free.app"
        />
      )}
      {isLoggedIn && <UserCard />}
    </main>
  );
}

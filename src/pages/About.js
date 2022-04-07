export default function About() {
  return (
    <>
      <div className="about-component">
        <h1>About Us</h1>

        <p>
          CamiFlix is a streaming platform with all the movies you can imagine.
          With only $5 per month you can enjoy thousands of movies and tv shows.
          Subscribe today and receive a 1 month free.
        </p><br></br>
      </div>

      <main className="form-component">
        <h1>Subscribe</h1>
        <div className="subscribe-form">
          <form action="" className="form">
            <div className="column">
              <input type="text" name="" id="" placeholder="full name" />
              <input type="date" name="" id="" placeholder="birthday" />
            </div>
            <div className="column">
              <input type="email" name="" id="" placeholder="e-mail" />
              <input type="password" name="" id="" placeholder="password" />
              <input
                type="password"
                name=""
                id=""
                placeholder="repeat password"
              />
            </div>
          </form>
          <button type="submit">Subscribe</button>
        </div>
      </main>
    </>
  );
}
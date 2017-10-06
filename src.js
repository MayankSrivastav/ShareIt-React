
const ownerUserData = {
  ownerUser: "mayank",
  images: [
    {
      id: 0,
      url:
        "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?h=350&w=350&auto=compress&cs=tinysrgb",
      likes: 2,
      like: ["mayank", "dave"],
      comments: [
        { mayank: "Nice image" },
        { dave: "Great watch" },
        { mayank: "Nice image again" },
        { dennis: "Beautiful bezel" }
      ],
      fav: ["dennis", "dave"]
    },
    {
      id: 1,
      url:
        "https://images.pexels.com/photos/9352/glass-time-watch-business.jpg?h=350&w=350&auto=compress&cs=tinysrgb",
      likes: 3,
      like: ["mayank", "dave", "dennis"],
      comments: [
        { dave: "Great watch" },
        { mayank: "Nice image again" },
        { dennis: "Beautiful bezel" }
      ],
      fav: ["dennis"]
    },
    {
      id: 2,
      url:
        "https://images.pexels.com/photos/552598/pexels-photo-552598.jpeg?h=350&w=350&auto=compress&cs=tinysrgb",
      likes: 2,
      like: ["mayank", "dave"],
      comments: [
        { mayank: "Nice image" },
        { dave: "Great watch" },
        { mayank: "Nice image again" },
        { dennis: "Beautiful bezel" }
      ],
      fav: ["dennis", "dave"]
    },
    {
      id: 3,
      url:
        "https://images.pexels.com/photos/236900/pexels-photo-236900.jpeg?h=350&w=350&auto=compress&cs=tinysrgb",
      likes: 2,
      like: ["mayank", "dave"],
      comments: [
        { mayank: "Nice image" },
        { dave: "Great watch" },
        { mayank: "Nice image again" },
        { dennis: "Beautiful bezel" }
      ],
      fav: ["dennis", "dave"]
    },
    {
      id: 4,
      url:
        "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?h=350&w=350&auto=compress&cs=tinysrgb",
      likes: 2,
      like: ["mayank", "dave"],
      comments: [
        { mayank: "Nice image" },
        { dave: "Great watch" },
        { mayank: "Nice image again" },
        { dennis: "Beautiful bezel" }
      ],
      fav: ["dennis", "dave"]
    },
    {
      id: 5,
      url:
        "https://images.pexels.com/photos/8592/pexels-photo.jpg?h=350&w=350&auto=compress&cs=tinysrgb",
      likes: 2,
      like: ["mayank", "dave"],
      comments: [
        { mayank: "Nice image" },
        { dave: "Great watch" },
        { mayank: "Nice image again" },
        { dennis: "Beautiful bezel" }
      ],
      fav: ["dennis", "dave"]
    }
  ]
};

const GetComments = comm => {
  let key = Object.keys(comm)[0];
  let val = Object.values(comm)[0];

  return (
    <li>
      <a href="#" id="comment-user"><span>{key}</span></a>
      <span id="comment">{val}</span>
    </li>
  );
};

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  render() {
    return (
      <section className="comment-section">
        <section className="row text-left">
          <section className="col-md-12">
            <ul id="comments">
              {this.props.comments.map(com => {
                return GetComments(com);
              })}
            </ul>
          </section>
        </section>
        <br />
        <section className="row text-left">
          <section className="col-md-10">
            <input
              type="text"
              className="form-control"
              id="usr-comment"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </section>

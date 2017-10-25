
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
          <section className="col-md-2">
            <a href="javascript:void(0)" id="add-comment">
              <i
                className="fa fa-plus-circle"
                aria-hidden="true"
                onClick={e => {
                  const val = this.state.value;
                  this.setState({ value: "" });
                  this.props.onHandleComment(val);
                }}
              />
            </a>
          </section>
        </section>
      </section>
    );
  }
}

class LikeUnlike extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <section className="row text-left">
        <section className="col-md-12">
          <ul id="like-unlike" className="align-middle">
            <li>
              <a href="javascript:void(0)" id="thumbs-up">
                <i
                  className={
                    this.props.likeUnlike === true
                      ? "fa fa-thumbs-up"
                      : "fa fa-thumbs-o-up"
                  }
                  aria-hidden="true"
                  onClick={e => this.props.onHandleLikeUnlike(e)}
                />
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" id="fav">
                <i
                  className={
                    this.props.fav === true ? "fa fa-heart" : "fa fa-heart-o"
                  }
                  aria-hidden="true"
                  onClick={e => this.props.onHandleLikeUnlike(e)}
                />
              </a>
            </li>
            <li><span>{this.props.likes} likes</span></li>
          </ul>
        </section>
      </section>
    );
  }
} 

const UserName = props => {
  return (
    <section className="row">
      <section className="col-md-6 text-left">
        <h3>{props.ownerUserName}</h3>
      </section>
    </section>
  );
};

class MetaPanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      ownerUser: "",
      currentUser: "",
      likes: 0,
      like: [],
      comments: [],
      fav: []
    };

    this.handleLikeUnlike = this.handleLikeUnlike.bind(this);
    this.handleComment = this.handleComment.bind(this);
  }
  
  componentDidMount() {
    const prop = this.props.image_meta;
    if (this.props.id === prop.id) {
      this.setState({
        id: prop.id,
        ownerUser: this.props.ownerUser,
        currentUser: this.props.currentUser,
        likes: prop.likes,
        like: prop.like,
        comments: prop.comments,
        fav: prop.fav
      });
    } else {
      this.setState({ ownerUser: this.props.ownerUser });
    }
  }
  handleLikeUnlike(e) {
    const target = e.target.className;
    if (target.indexOf("thumbs") !== -1) {
      if (target.indexOf("thumbs-up") !== -1) {
        let like = this.state.like;
        let likeUsers = like.slice(like.indexOf(this.state.currentUser), 0);
        this.setState(prevState => {
          return {
            like: likeUsers,
            likes: prevState.likes - 1
          };
        });
      } else if (target.indexOf("thumbs-o-up") !== -1) {
        let like = this.state.like;
        like.push(this.state.currentUser);
        this.setState(prevState => {
          return {
            like: like,
            likes: prevState.likes + 1
          };
        });
      }
    }

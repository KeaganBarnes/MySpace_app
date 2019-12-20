import React, { useState, useEffect, } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Header, Image, Card, Button, Icon } from 'semantic-ui-react';

const Home = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("/api/profiles")
      .then(res => setProfiles(res.data))
  }, []);

  const sample = () => {
    if (profiles.length) {
      const index = Math.floor(Math.random() * profiles.length);
      return profiles[index];
    } else {
      return null;
    }
  };

  const downVote = (id) => {
    const newProfiles = profiles.filter(profile => profile.id !== id);
    setProfiles(newProfiles);
  };

  const upVote = (id) => {
    axios.put(`/api/profiles/${id}`)
      .then(res => setProfiles(profiles.filter(profile => profile.id !== id)))
  };

  const profile = sample();
  if (profile) {
    return (
      <div>
        <br />
        <Header as="h1">MySpace</Header>
        <hr />
        <Link to="/mylikes">
          <Button icon
            color="blue"
          >
            <Icon name="eye" /> 
            MyLikes
          </Button>
        </Link>
        <br />
        <br />
        <Card.Group itemsPerRow={4}>
          {profiles.map(profile => (
            <Card>
              <Image src={profile.avatar} />
              <Card.Content>
                <Card.Header>
                  {profile.name}
                </Card.Header>
                <Card.Description>
                  {profile.breed}
                </Card.Description>
                <Card.Meta>
                  {profile.registry}
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Button color="red" icon basic onClick={() => downVote(profile.id)}>
                  <Icon name="thumbs down" />
                </Button>
                <Button color="green" icon basic onClick={() => upVote(profile.id)}>
                  <Icon name="thumbs up" />
                </Button>
              </Card.Content>
            </Card>
          ))}
        </Card.Group>
        <Button as={Link} to="/my_cats" color="blue">
          My Friends
        </Button>
      </div>
    )
  } else {
    return <Header as="h1" textAlign="center">No More Profiles</Header>
  }
};

export default Home;
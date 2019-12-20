import React, { useEffect, useState, } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { Header, Card, Divider, Image, Button, Icon } from "semantic-ui-react";

const MyLikes = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("/api/my_likes")
      .then(res => setProfiles(res.data))
  }, []);

  return (
    <div>
      <br />
      <Link to="/" >
      <Button
      icon
      color="blue"
      >
      <Icon name="home" />
      </Button>
      </Link>
      <Header as="h1">MyLikes</Header>
      <hr />
      <br />
      <Card.Group itemsPerRow={4}>
        {profiles.map(profile => (
          <Card key={profile.id}>
            <Image src={profile.avatar} />
            <Card.Content>
              <Divider />
              <Card.Header>
                {profile.name}
              </Card.Header>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </div>
  );
};

export default MyLikes;
import Head from "next/head";
import { Fragment } from "react";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return(
    <Fragment>
    <Head>
      <title>React Meetups</title>
      <meta name="description" content="Browse a huge list of  highly active meetups"/>
    </Head>
    <MeetupList meetups={props.meetups} />;
  </Fragment>
  )
 ;
}

export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://alma:Vp%21vnrLU-a%25jcM8@cluster0.pfxikbu.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;

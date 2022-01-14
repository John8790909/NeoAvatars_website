import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import avatar1 from "../assets/21.png";
import groupe from "../assets/groupe.png";
import rarity from "../assets/Absurd.svg";
import factions from "../assets/factions.svg";

import Red from "../assets/Red.svg";
import Purple from "../assets/Purple.svg";
import Green from "../assets/Green.svg";

import { Typography, Divider } from "@mui/material";

import RollingImages from "../components/RollingImages";

import profilePic1 from "../assets/pfp1.gif";
import profilePic2 from "../assets/pfp2.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Neo Avatars</title>
        <meta name="description" content="Neo Avatars website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            width: "100vw",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <RollingImages />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography variant="h3" className={styles.title}>
              Welcome to <span className={styles.gradient}>Neo Avatars</span>
            </Typography>
            <div style={{ height: "40px" }} />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <Button
                text="View on Opensea"
                onClick={() => {
                  window.open("https://opensea.io/collection/neo-avatars");
                }}
              />
              <div style={{ width: "20px", height: "20px" }} />
              <Button
                text="Join Discord"
                onClick={() => {
                  window.open("https://discord.gg/ZRVBHgmXra");
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.home__frame_1}>
          <div className={styles.flexCenter}>
            <div className={styles.grid}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={styles.card}
              >
                <Typography variant="h4">Avatars 👨‍🎤</Typography>
                <Divider
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "white",
                    margin: "10px",
                  }}
                />

                <Typography variant="h5">
                  This is an avatar he has specific stats EX:.(Str💪: 40 | Hp💜:
                  210 | Agi💨: 60 | Pre🎯: 55). The better his stats are the
                  more likely you will enjoy playing with him.
                </Typography>
                <Image draggable={false} src={avatar1} alt="avatar1" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={styles.card}
              >
                <Typography variant="h4">Avatars 👨‍🎤</Typography>
                <Divider
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "white",
                    margin: "10px",
                  }}
                />
                <Typography variant="h5">
                  There are over 10 000 unique Avatars that you can collect.
                </Typography>
                <Image draggable={false} src={groupe} alt="group" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                className={styles.card}
              >
                <Typography variant="h4">Rarity ✨</Typography>
                <Divider
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "white",
                    margin: "10px",
                  }}
                />
                <Typography variant="h5">
                  There are 5 rarities common (50%), uncommon (24%), rare (15%),
                  epic (9%) and absurd (2%). The more rare the avatar the more
                  expensive he is but his stats will be segnificantly better.
                </Typography>
                <Image draggable={false} src={rarity} alt="absurd" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "650px",
                }}
                className={styles.card}
              >
                <Typography variant="h4">Factions 👥</Typography>
                <Divider
                  style={{
                    width: "100%",
                    height: "2px",
                    backgroundColor: "white",
                  }}
                />
                <Typography variant="h5">
                  The 2 factions that are currently availible are Prime and
                  Argo. Both of these factions are enemmies and are hostile to
                  each other.
                </Typography>
                <Image draggable={false} src={factions} alt="factions" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Typography variant="h3" className={styles.title}>
            <span className={styles.gradient}>What are Stats?</span>
          </Typography>
          <div style={{ height: "40px" }} />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100vw",
            }}
          >
            <div style={{ alignItems: "stretch" }} className={styles.grid}>
              <div className={styles.card}>
                <Typography variant="h4">Strength💪</Typography>
                <div style={{ height: "20px" }} />
                <Typography variant="h5">
                  The strength stat is the most important stat in the game it is
                  used to determine the damage you deal to your enemies.
                </Typography>
              </div>
              <div className={styles.card}>
                <Typography variant="h4">Health💜</Typography>
                <div style={{ height: "20px" }} />
                <Typography variant="h5">
                  The health stat is pretty self explanatory. It determines how
                  much health you have.
                </Typography>
              </div>
              <div className={styles.card}>
                <Typography variant="h4">Precision🎯</Typography>
                <div style={{ height: "20px" }} />
                <Typography variant="h5">
                  The precision stat determines how likely your avatar is to get
                  a critical hit.
                </Typography>
              </div>
              <div className={styles.card}>
                <Typography variant="h4">Agility💨</Typography>
                <div style={{ height: "20px" }} />
                <Typography variant="h5">
                  The agility stat determines how fast your avatar is attacks.
                </Typography>
              </div>
            </div>
            <div style={{ height: "40px" }} />
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              <div>
                <Image
                  width={400}
                  height={400}
                  draggable={false}
                  src={Red}
                  alt="red"
                />
              </div>
              <div>
                <Typography
                  style={{ maxWidth: "300px", marginLeft: "50px" }}
                  variant="h4"
                >
                  Red items have a tendency to give you more strength💪 then
                  others
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              <div>
                <Image
                  width={400}
                  height={400}
                  draggable={false}
                  src={Purple}
                  alt="purple"
                />
              </div>
              <div>
                <Typography
                  style={{ maxWidth: "300px", marginLeft: "50px" }}
                  variant="h4"
                >
                  Purple items have a tendency to give you more precision🎯 then
                  others
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              <div>
                <Image
                  width={400}
                  height={400}
                  draggable={false}
                  src={Green}
                  alt="green"
                />
              </div>
              <div>
                <Typography
                  style={{ maxWidth: "300px", marginLeft: "50px" }}
                  variant="h4"
                >
                  Green items have a tendency to give you more health💜 then
                  others
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Typography variant="h3" className={styles.title}>
            <span className={styles.gradient}>Meet the Team</span>
          </Typography>
          <div style={{ height: "40px" }} />
          <div className={styles.grid}>
            <div
              className={styles.card}
              style={{ width: "350px", height: "200px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  width={50}
                  height={50}
                  draggable={false}
                  alt="profile-pic"
                  src={profilePic1}
                  className={styles.profileImage}
                />
                <Typography variant="h6">AverageNFTEnjoyer</Typography>
              </div>
              <div style={{ height: "20px" }} />
              <Typography variant="h5">
                - Badass webdev 🌐 <br /> - Amature blockchain dev 🧑‍💻 <br />{" "}
                - Coded the discord bots 👾
              </Typography>
            </div>
            <div
              className={styles.card}
              style={{ width: "350px", height: "200px" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                }}
              >
                <Image
                  width={50}
                  height={50}
                  draggable={false}
                  alt="profile-pic"
                  src={profilePic2}
                  className={styles.profileImage}
                />
                <Typography variant="h6">Mster AB</Typography>
              </div>
              <div style={{ height: "20px" }} />
              <Typography variant="h5">
                - Discord Stuff 👾 <br /> - Moral support ✨ <br /> - Game Dev
                🎮
              </Typography>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyright © 2022 Neo Avatars
        </a>
      </footer>
    </div>
  );
}

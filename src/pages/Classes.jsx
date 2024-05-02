import Button from "../components/Button";
import Content from "../components/Content";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
import { useState } from "react";

export default function Classes(props) {
  const [chosen, setChosen] = useState(0);

  function Class(props) {
    if (chosen == 1) {
      return (
        <>
          <Title subtitle="Intro to Coding" />
          <ul>
            <li>
              A 12-week course for middle- to high-school aged students to learn
              the foundations of coding and algorithms through the create of
              two-dimensional arcade games using:
            </li>
          </ul>
          <br />
          <Button
            label="Microsoft MakeCode Arcade"
            method={() => {
              window.open("http://arcade.makecode.com", "_blank");
            }}
          />
          <ul>
            <li>
              This course is designed for students that want to dip their toes
              into computer programming to see if it is something that they like
              and may want to pursue further.{" "}
            </li>
            <br />
            <li>
              Students progress through five units, each focusing on a different
              genre or component of video games:
            </li>
            <br />
            <ul>
              <li>
                <b>Unit 1: Sprite Story</b> has students learning the basics of
                working with MakeCode Arcade and how sequencing, the order of
                steps in an algorithm, plays a huge role in how computer
                programs function. Students will make a program that resembles a
                short story or cutscene in a video game.
              </li>
              <br />
              <li>
                <b>Unit 2: Scroller Game</b> has students learning about event
                handlers (also sometimes referred to as event listeners) to
                incorporate user input and interactions between in-game objects.
                Students are introduced to variables through Life and Score, and
                perform operations on these variables to create methods of
                winning and losing in the game.
              </li>
              <br />
              <li>
                <b>Unit 3: Platformer Game</b> has students learning about
                iterations, loops that repeat similar code, and selection,
                statements that choose certain commands to execute based on
                conditions. Students begin to learn about abstraction through
                using arrays (lists) and functions to simplify complex programs.
              </li>
              <br />
              <li>
                <b>Unit 4: Adventure Game</b> has students applying their
                knowledge and skills to design and develop an adventure game to
                meet certain criteria.
              </li>
              <br />
              <li>
                <b>Unit 5: Your Game!</b> tasks students with developing a full
                game of their choice using all of the skills they have developed
                throughout the course.
              </li>
            </ul>
          </ul>
        </>
      );
    }
  }

  return (
    <Content>
      <Title
        title="High School Classes"
        subtitle={chosen == 0 ? "Click on a class to learn more:" : ""}
      />
      <Row align="spaced">
        <Col align="center" width="45%">
          <Button
            image="itc.png"
            href="/itc"
            label="Intro to Coding"
            method={() => {
              setChosen(1);
            }}
          />
          <Button
            image="itc.png"
            href="/itc"
            label="AP Computer Science Principles"
          />
          <Button image="itc.png" href="/itc" label="AP Computer Science A" />
        </Col>
        <Col align="center" width="45%">
          <Class />
        </Col>
      </Row>
    </Content>
  );
}

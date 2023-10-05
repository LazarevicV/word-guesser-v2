"use client";

import OuterBorderHomePage from "@/app/_components/OuterBorderHomePage";
import HomePageTitle from "@/app/_components/HomePageTitle";
import HomePageParagraph from "@/app/_components/HomePageParagraph";
import StartGameDiv from "@/app/_components/StartGameDiv";

export default function Home() {

  const title = 'Word guessing game'
  const paragraphMessage = 'Created by Vule and Ana'
  const startPath = '/start'
  const messageStart = 'Start a new game'

  return (
    <OuterBorderHomePage>
      <HomePageTitle message={title}/>
      <HomePageParagraph message={paragraphMessage}/>
      <StartGameDiv path={startPath} message={messageStart}/>
    </OuterBorderHomePage>
  );
}

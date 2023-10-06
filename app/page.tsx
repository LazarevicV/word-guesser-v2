"use client";

import OuterBorderHomePage from "@/app/_components/OuterBorderHomePage";
import HomePageTitle from "@/app/_components/HomePageTitle";
import HomePageParagraph from "@/app/_components/HomePageParagraph";
import StartGameDiv from "@/app/_components/StartGameDiv";
import HomePageLogo from "@/app/_components/HomePageLogo";

export default function Home() {

  const title = 'Word guessing game'
  const paragraphMessage = 'Created by Vule and Ana'
  const startPath = '/start'
  const messageStart = 'Start a new game'
  const imagePath = '/homepageImage.png'

  return (
    <>
      <OuterBorderHomePage>
        <HomePageTitle message={title}/>
        <HomePageParagraph message={paragraphMessage}/>
        <HomePageLogo imagePath={imagePath}/>
        <StartGameDiv path={startPath} message={messageStart}/>
      </OuterBorderHomePage>
    </>
  );
}

'use client';

import { ChevronRight } from 'lucide-react';

import { InfoCard } from '@/components/Cards/InfoCard';
import { MeetCard } from '@/components/Cards/MeetCard';
import { Page } from '@/components/Page';
import { SmallButton } from '@/components/ui/Buttons/SmallButton';
import { CustomImage } from '@/components/ui/CustomImage';
import { Header } from '@/components/ui/Texts/Header';

interface MeetsPageData {
  title: string;
  upcomingEvents: {
    title: string;
    description: string;
    date: string;
    time: string;
    type: string;
  }[];
  calendarButton: string;
  regularActivities: {
    title: string;
    description: string;
    buttonText: string;
  }[];
  gallery: {
    asset: {
      _ref: string;
    };
    alt: string;
  }[];
}

export default function Meets({ data }: { data: MeetsPageData }) {
  if (!data) {
    return (
      <Page>
        <div className="flex justify-center items-center h-screen">
          <p>Загрузка...</p>
        </div>
      </Page>
    );
  }

  // console.log('Gallery data:', data.gallery);

  return (
    <Page>
      <Header>{data.title}</Header>

      <div className="flex justify-between items-center w-full">
        <p className="text-lg">Скоро будет</p>
        <ChevronRight className="w-6 h-6" />
      </div>

      <div className="flex gap-3 mt-3 w-full overflow-x-auto self-start hide-scrollbar">
        {data.upcomingEvents?.map((event, index) => (
          <MeetCard
            key={index}
            title={event.title}
            text={event.description}
            href="#"
            date={event.date}
            type={event.time}
            time={event.type}
          />
        ))}
      </div>

      <SmallButton className="mt-6 py-6">{data.calendarButton}</SmallButton>

      <div className="flex justify-between items-center w-full mt-6">
        <p className="text-lg">Регулярные активности</p>
        <ChevronRight className="w-6 h-6" />
      </div>

      <div className="flex flex-col gap-3 w-full mt-3">
        {data.regularActivities?.map((activity, index) => (
          <InfoCard
            key={index}
            title={activity.title}
            text={activity.description}
            href="#"
            buttonText={activity.buttonText}
          />
        ))}
      </div>

      <div className="flex gap-4 p-4 flex-wrap w-full">
        {/* {data.gallery?.map((image, index) => (
          <CustomImage key={index} src={image.asset._ref} description={image.alt} />
        ))} */}
        <CustomImage src="images/image 6.png" description="Описание изображения" />
        <CustomImage src="images/image 7.png" description="Описание изображения" />
        <CustomImage src="images/image 8.png" description="Описание изображения" />
      </div>
    </Page>
  );
}

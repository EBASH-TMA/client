'use client';

import { Button } from '@/components/ui/Button';
import { DarkSection } from '@/components/ui/DarkSection';
import { Header } from '@/components/ui/Header';
import { Page } from '@/components/ui/Page';
import { Text } from '@/components/ui/Text';

export default function Home() {
  return (
    <Page>
      <Header text="EBASH" />
      <DarkSection>
        <Text>Здарова, че бакланишь?</Text>
        <p className="text-sm mt-2">
          Мы сообщество тех, кто стремится к саморазвитию, ответственности за свою жизнь и осознанному подходу к ней. Не
          просто работаем, а вкладываемся на полную во все сферы жизни: от работы и учёбы до отдыха и личного роста
        </p>
        <div className="flex flex-col gap-2 mt-4">
          <Button text="Гайд новичка" />
          <Button text="Календарь" />
          <Button text="Чаты" />
          <Button text="Регулярные активности" />
          <Button text="Ништяки и материалы" />
          <Button text="Написать куратору" />
        </div>
      </DarkSection>
    </Page>
  );
}

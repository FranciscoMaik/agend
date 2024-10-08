import React, { useState } from 'react';
import { ContentPage } from '../components/ContentPage';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { ScrollView, StyleSheet } from 'react-native';

import { ptBR } from '../utils/localeCalendarConfig';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

const Agend: React.FC = () => {
  const [day, setDay] = useState<DateData>();

  return (
    <ContentPage titlePage='Agenda'>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{padding: 12}}
      >
        <Calendar 
          style={styles.calendar}
          headerStyle={{
            borderBottomWidth: 0.5, 
            borderBottomColor: '#ff99ff63',
            paddingBottom: 10,
            marginBottom: 10,
          }}
          theme={{
            textMonthFontSize: 18,
            monthTextColor: '#9B6BB3',
            todayTextColor: '#FF99FF',
            selectedDayBackgroundColor: '#FF99FF',
            arrowColor: '#9B6BB3',
            calendarBackground: 'transparent',
            textDisabledColor: '#cdcdcd',
            dayTextColor: '#9B6BB3',
            textSectionTitleColor: '#9B6BB3',
          }}
          minDate={new Date().toDateString()}
          onDayPress={setDay}
          markedDates={
            day && {
              [day?.dateString]: {
                selected: true,
              }
            }
          }
        />
      </ScrollView>
    </ContentPage>
  );
}

export default Agend;

const styles = StyleSheet.create({
  calendar: {
    backgroundColor: 'transparent',
  }
})
import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
  Division,
} from './styles'
import { getWeekDays } from '@/src/utils/get-week-days'

export function Calendar() {
  const shortWeekDays = getWeekDays({ short: true })

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Abril <span>2023</span>
        </CalendarTitle>

        <CalendarActions>
          <button>
            <CaretLeft />
          </button>

          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekDays.map((weekDay) => (
              <th key={weekDay}>{weekDay}.</th>
            ))}
          </tr>
        </thead>

        <Division>.....</Division>

        <tbody>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <CalendarDay>1</CalendarDay>
          </td>
          <td>
            <CalendarDay>2</CalendarDay>
          </td>
          <td>
            <CalendarDay>3</CalendarDay>
          </td>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}

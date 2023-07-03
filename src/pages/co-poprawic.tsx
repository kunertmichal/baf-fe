import { DefaultLayout } from '@/components/DefaultLayout'
import { Paragraph, PrimaryHeadline } from '@/components/Typography'

export default function Improvements() {
  return (
    <DefaultLayout>
      <div className="max-w-2xl w-full mx-auto p-12">
        <PrimaryHeadline className="mb-2">Co możesz poprawić</PrimaryHeadline>
        <Paragraph>
          Poniżej znajdziesz kilka sugestii nt. tego co możesz zrobić, aby
          poprawic wskaźnik BAF na Twojej działce.
        </Paragraph>
        <ul className="mt-12 space-y-4">
          <li>
            Zwiększenie zielonej powierzchni na Twojej działce, na przykład
            poprzez posadzenie więcej drzew i krzewów, zwiększy BAF.
          </li>
          <li>
            Instalacja zielonych dachów i żywych ścian na budynkach znajdujących
            się na Twojej działce może przyczynić się do poprawy BAF.
          </li>
          <li>
            Utworzenie stawów lub innych wodnych biotopów może również poprawić
            BAF na Twojej działce.
          </li>
          <li>
            Zastąpienie utwardzonych powierzchni, takich jak betonowe chodniki
            czy asfaltowe podjazdy, przez naturalne, przepuszczalne materiały,
            takie jak żwir czy drewniane kładki, zwiększy BAF.
          </li>
          <li>
            Zmniejszenie ogólnej ilości infrastruktury na Twojej działce i
            zastąpienie jej dodatkowymi obszarami zielonymi, takimi jak łąki
            kwietne czy lasy, pomoże w zwiększeniu BAF.
          </li>
          <li>
            Stworzenie siedlisk dla lokalnej fauny, na przykład poprzez budowę
            budek dla ptaków czy skrzyni dla nietoperzy, zwiększy różnorodność
            biologiczną na Twojej działce, co przyczyni się do poprawy BAF.
          </li>
        </ul>
      </div>
    </DefaultLayout>
  )
}

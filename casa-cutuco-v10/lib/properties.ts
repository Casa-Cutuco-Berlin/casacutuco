export type Property = {
  id: string;
  name: string;
  type: string;
  guests: number;
  beds: number;
  bath: number;
  rating: string;
  image: string;
  airbnb: string;
  airbnbIcalEnv: string;
};

export const properties: Property[] = [
  {
    id: "casa-1",
    name: "Casa Cutuco #1",
    type: "Main House",
    guests: 5,
    beds: 3,
    bath: 1,
    rating: "4.0",
    image: "https://a0.muscache.com/im/pictures/miso/Hosting-1548260998568327005/original/28d23295-cb8d-4dda-903b-7a5d521fb614.jpeg?im_w=1200",
    airbnb: "https://www.airbnb.com/rooms/1548260998568327005?unique_share_id=cc538df4-4bfc-4b33-adab-9d2183a2ce39&viralityEntryPoint=1&s=76",
    airbnbIcalEnv: "AIRBNB_ICAL_CASA_1"
  },
  {
    id: "casa-2",
    name: "Casa Cutuco #2",
    type: "Private Guest House",
    guests: 4,
    beds: 2,
    bath: 1,
    rating: "4.8",
    image: "https://a0.muscache.com/im/pictures/hosting/Hosting-1477991766643387473/original/e0441818-e582-4017-829b-dbec2f641ce3.jpeg?im_w=1200",
    airbnb: "https://www.airbnb.com/rooms/1477991766643387473?unique_share_id=57f86363-0874-4888-b8df-ada20f7204a6&viralityEntryPoint=1&s=76",
    airbnbIcalEnv: "AIRBNB_ICAL_CASA_2"
  }
];

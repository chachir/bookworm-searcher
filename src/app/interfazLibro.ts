export interface interfazLibro {

  ID: String;
  title: String;
  author: String;
  content: String;
  content_shor: String;
  publisher: String;
  publisher_date: String;
  pages: String;
  language: String;
  url_details: String;
  url_download: String;
  cover: String;
  thumbnail: String;
  num_comments: String;
  categories: [
    category_id: number,
    name: String,
    nicename: String,
  ];
  tags: [
    tag_id: number,
    name: String,
    nicename: String,
  ];


}

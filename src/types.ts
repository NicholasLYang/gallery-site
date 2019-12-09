import {ReactElement} from "react";

export interface Topic {
  href: string;
  color: string;
  company: string;
  logo: string
  page: () => ReactElement
}

export interface Topics {
  data: Topic,
  labor: Topic,
  addiction: Topic,
  funding: Topic
}
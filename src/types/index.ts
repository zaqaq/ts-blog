
export interface IAricleList {
  id: number;
  tag: string;
  title: string;
  des: string | null;
  publish_date: string;
  comment_count: number;
  content? : any;
  read_count: number;
  praise_count: number;
  details_id: number;
}

export interface IAricleListWrap {
  articleDetail: IAricleList,
  next: {
    details_id?: number,
    title?: string,
    flag: boolean
  },
  prev: {
    details_id?: number,
    title?: string,
    flag: boolean
  }
}

export interface IAricleListAll {
  totalNum: number;
  articleList: IAricleList[];
}

export interface IPager {
  total: number;
  pageNum: number;
  handlePageNum: (num: number) => void;
  pageSize?: number;
}

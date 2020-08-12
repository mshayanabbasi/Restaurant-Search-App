import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer x2RbRdWBqRJMr5_06rQ8iRTSVarXeKn_Md22ULJRUPdfNgdlAcFZRl4t65WuGenuZzGqMJIzOteW__wqMCTr23-K4EktoMxV-66IIAMTpeJHFqTixeayISWkALMyX3Yx",
  },
});

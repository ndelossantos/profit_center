/// <reference types="vite/client" />

type myColor = {
    bgcolor: string
}

type tCountries = {
    ccode: number,
    country: string
}

type PkgCommonTypeArr = {
    // [resp:]
    pkg_comm_id: number,
    pkg_comm_name: string,
    pkg_comm_DRB: string,
    pkg_comm_BP: string,
    pkg_comm_CP: string,
}

type TpkgMain = {
    pkg_main_id: number,
    pkg_main_name: string,
    pkg_main_desc: string | null
}
  
type TpkgSub = {
    pkg_sub_id: number,
    pkg_sub_name: string,
    pkg_sub_desc: string | null
}

type PkgCommonType = {
    // [resp:]
    pkg_comm_id: number,
    pkg_comm_name: string,
    pkg_comm_desc: string
    pkg_comm_img_name: string,
    pkg_comm_img_path: string,
    pkg_comm_sub_id: sumber,
    pkg_comm_main_id: number,
    pkg_comm_drb: string,
    pkg_comm_bp: string,
    pkg_comm_cp: string,
    pkg_comm_remarks1: string,
    pkg_comm_remarks2: string,
    pkg_comm_prod_drp: string,
    pkg_comm_prod_srp: string
}

type TprodTable = {
    pkg_prod_id: number,
    pkg_prod_name: string,
    pkg_prod_qty: number,
    pkg_prod_total: number,
}

type TpcHeadOffice = {
    prodcode: string,
    prodname: string,
    totalprice: number
}

type TpcBCO = {
    mid: string,
    fullname: string,
    prodcode: string,
    prodname: string,
    totalprice: number
}

type TpcBranches = {
    mid: string,
    fullname: string,
    totalprice: number
}


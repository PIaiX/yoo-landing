import { useTranslation } from "react-i18next";
import React, { memo } from "react";
import { HiOutlineEye, HiOutlineCalendar, HiOutlineClock } from "react-icons/hi2";
import FolderSvg from "./svg/FolderSvg";
import { Link } from "react-router-dom";

const ArticlePreview = memo((
    {
        data
    }
) => {
    const { t } = useTranslation();
    return (
        (<article className="preview">
            <Link to={"/article/" + data.id}>
                <FolderSvg className={"preview-bg"} />
                <img src={data.imgLink} alt={data.title} />
                <div className="d-flex align-items-center mt-1">
                    <div className="d-flex align-items-center">
                        <HiOutlineClock className="fs-15 me-2" />
                        <span>{t('2 мин')}</span>
                    </div>
                    <div className="d-flex align-items-center ms-4">
                        <HiOutlineEye className="fs-15 me-2" />
                        <span>128</span>
                    </div>
                    <div className="d-flex align-items-center ms-4">
                        <HiOutlineCalendar className="fs-15 me-2" />
                        <span>{data.date}</span>
                    </div>
                </div>
                <p className="text">
                    {data.title}
                    {data.text}
                </p>
                <ul className="markers">
                    <li className="dev">{t('#Разработка')}</li>
                    <li className="css">#CSS</li>
                </ul>
            </Link>
        </article>)
    );
});

export default ArticlePreview;
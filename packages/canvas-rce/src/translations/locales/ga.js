/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import formatMessage from '../../format-message'
import '../tinymce/ga'

const locale = {
  "access_the_pretty_html_editor_37168efe": {
    "message": "Faigh rochtain ar an eagarthóir HTML álainn"
  },
  "accessibility_checker_b3af1f6c": { "message": "Seiceálaí Inrochtaineachta" },
  "action_to_take_b626a99a": { "message": "Gníomh le déanamh:" },
  "add_8523c19b": { "message": "Cuir le" },
  "add_a_caption_2a915239": { "message": "Cuir fotheideal leis" },
  "add_alt_text_for_the_image_48cd88aa": {
    "message": "Cuir téacs alt leis don íomhá"
  },
  "add_another_f4e50d57": { "message": "Cuir ceann eile leis" },
  "add_cc_subtitles_55f0394e": { "message": "Cuir CC/Fotheidil leis" },
  "add_image_60b2de07": { "message": "Cuir Íomhá leis" },
  "add_one_9e34a6f8": { "message": "Cuir ceann leis!" },
  "additional_considerations_f3801683": { "message": "Breithnithe breise" },
  "adjacent_links_with_the_same_url_should_be_a_singl_7a1f7f6c": {
    "message": "Ba cheart go mbeadh naisc in aice leis an URL céanna ina nasc amháin."
  },
  "ai_response_9624e8e8": { "message": "Freagra IS" },
  "ai_tools_fda01177": { "message": "Uirlisí IS" },
  "aleph_f4ffd155": { "message": "Aleph" },
  "align_11050992": { "message": "Ailínigh" },
  "alignment_and_lists_5cebcb69": { "message": "Ailíniú agus Liostaí" },
  "all_4321c3a1": { "message": "Gach" },
  "all_apps_a50dea49": { "message": "Aipeanna ar Fad" },
  "alpha_15d59033": { "message": "Alfa" },
  "alphabetical_55b5b4e0": { "message": "Aibítre" },
  "alt_attribute_text_should_not_contain_more_than_12_e21d4040": {
    "message": "Níor cheart go mbeadh níos mó ná 120 carachtar i dtéacs aitreabúide alt."
  },
  "alt_text_611fb322": { "message": "Téacs Alt" },
  "amalg_coproduct_c589fb12": { "message": "Amalg (Coproduct)" },
  "an_error_occured_reading_the_file_ff48558b": {
    "message": "Tharla earráid agus an comhad á léamh"
  },
  "an_error_occurred_making_a_network_request_d1bda348": {
    "message": "Tharla earráid agus iarratas gréasáin á dhéanamh"
  },
  "an_error_occurred_processing_your_request_a3a38d84": {
    "message": "Tharla earráid agus d''iarratas á phróiseáil"
  },
  "an_error_occurred_uploading_your_media_71f1444d": {
    "message": "Tharla earráid agus do mheáin á uaslódáil."
  },
  "and_7fcc2911": { "message": "Agus" },
  "angle_c5b4ec50": { "message": "Uillinn" },
  "announcement_fb4cb645": { "message": "Fógra" },
  "announcement_list_da155734": { "message": "Liosta Fógra" },
  "announcements_a4b8ed4a": { "message": "Fógraí" },
  "apply_781a2546": { "message": "Cuir iarratas isteach" },
  "apply_changes_to_all_instances_of_this_icon_maker__2642f466": {
    "message": "Cuir athruithe i bhfeidhm ar gach cás den Dheilbhín Déantóir Deilbhín seo sa Chúrsa"
  },
  "approaches_the_limit_893aeec9": {
    "message": "Ag druidim leis an dTeorainn"
  },
  "approximately_e7965800": { "message": "Thart ar" },
  "apps_54d24a47": { "message": "Aipeanna" },
  "are_you_sure_you_want_to_cancel_changes_you_made_m_c5210496": {
    "message": "An bhfuil tú cinnte gur mhaith leat cealú? Seans nach sábhálfar na hathruithe a rinne tú."
  },
  "arrows_464a3e54": { "message": "Saigheada" },
  "art_icon_8e1daad": { "message": "Deilbhín Ealaíne" },
  "aspect_ratio_will_be_preserved_cb5fdfb8": {
    "message": "Caomhnófar an cóimheas gné"
  },
  "assignment_976578a8": { "message": "Tasc" },
  "assignments_1e02582c": { "message": "Tascanna" },
  "asterisk_82255584": { "message": "Réiltín" },
  "attributes_963ba262": { "message": "Tréithe" },
  "audio_and_video_recording_not_supported_please_use_5ce3f0d7": {
    "message": "Ní thacaítear le taifeadadh fuaime agus físe; bain úsáid as brabhsálaí eile le do thoil."
  },
  "audio_options_feb58e2c": { "message": "Roghanna Fuaime" },
  "audio_options_tray_33a90711": { "message": "Tráidire Roghanna Fuaime" },
  "audio_player_for_title_20cc70d": {
    "message": "Seinnteoir fuaime le haghaidh { title }"
  },
  "auto_saved_content_exists_would_you_like_to_load_t_fee528f2": {
    "message": "Tá ábhar uathshábháilte ann. Ar mhaith leat an ábhar uathsábháilte a lódáil ina ionad sin?"
  },
  "available_folders_694d0436": { "message": "Fillteáin atá ar fáil" },
  "backslash_b2d5442d": { "message": "Cúlslais" },
  "bar_ec63ed6": { "message": "Barra" },
  "basic_554cdc0a": { "message": "Bunúsach" },
  "because_501841b": { "message": "Mar" },
  "below_81d4dceb": { "message": "Faoi" },
  "beta_cb5f307e": { "message": "Béite" },
  "big_circle_16b2e604": { "message": "Ciorcal Mór" },
  "binomial_coefficient_ea5b9bb7": { "message": "Comhéifeacht Dénomial" },
  "black_4cb01371": { "message": "Dubh" },
  "blue_daf8fea9": { "message": "Gorm" },
  "bottom_15a2a9be": { "message": "Bun" },
  "bottom_third_5f5fec1d": { "message": "Tríú ar an mBun" },
  "bowtie_5f9629e4": { "message": "Carbhat cuachóige" },
  "brick_f2656265": { "message": "Bríce" },
  "c_2001_acme_inc_283f7f80": { "message": "(c) 2001 Acme Inc." },
  "cancel_caeb1e68": { "message": "Cealaigh" },
  "cap_product_3a5265a6": { "message": "Táirge Cap" },
  "center_align_e68d9997": { "message": "Ailínigh sa Lár" },
  "centered_dot_64d5e378": { "message": "Pointe láraithe" },
  "centered_horizontal_dots_451c5815": {
    "message": "Poncanna Cothrománacha Láraithe"
  },
  "change_alt_text_92654906": { "message": "Athraigh téacs alt" },
  "change_heading_tag_to_paragraph_a61e3113": {
    "message": "Athraigh clib ceannteidil go mír"
  },
  "change_only_this_heading_s_level_903cc956": {
    "message": "Ná déan ach leibhéal an cheannteidil seo a athrú"
  },
  "change_text_color_1aecb912": { "message": "Athraigh dath an téacs" },
  "changes_you_made_may_not_be_saved_4e8db973": {
    "message": "Seans nach sábhálfar na hathruithe a rinne tú."
  },
  "characters_9d897d1c": { "message": "Carachtair" },
  "characters_no_spaces_485e5367": { "message": "Carachtair (gan spásanna)" },
  "check_accessibility_3c78211c": { "message": "Seiceáil Inrochtaineacht" },
  "checking_for_accessibility_issues_fac18c6d": {
    "message": "Ag seiceáil le haghaidh saincheisteanna inrochtaineachta"
  },
  "chi_54a32644": { "message": "Chi" },
  "choose_caption_file_9c45bc4e": { "message": "Roghnaigh comhad fotheideal" },
  "choose_usage_rights_33683854": { "message": "Roghnaigh cearta úsáide..." },
  "circle_484abe63": { "message": "Ciorcal" },
  "circle_unordered_list_9e3a0763": {
    "message": "ciorcal liosta neamhordaithe"
  },
  "clear_2084585f": { "message": "Glan" },
  "clear_image_3213fe62": { "message": "Bain Íomhá" },
  "clear_selected_file_82388e50": { "message": "Bain an comhad roghnaithe" },
  "clear_selected_file_filename_2fe8a58e": {
    "message": "Bain an comhad roghnaithe: { filename }"
  },
  "click_or_shift_click_for_the_html_editor_25d70bb4": {
    "message": "Cliceáil nó shift-cliceáil don eagarthóir html."
  },
  "click_to_embed_imagename_c41ea8df": {
    "message": "Cliceáil chun { imageName } a leabú"
  },
  "click_to_hide_preview_3c707763": {
    "message": "Cliceáil chun réamhamharc a cheilt"
  },
  "click_to_insert_a_link_into_the_editor_c19613aa": {
    "message": "Cliceáil chun nasc a chur isteach san eagarthóir."
  },
  "click_to_show_preview_faa27051": {
    "message": "Cliceáil chun réamhamharc a thaispeáint"
  },
  "close_a_menu_or_dialog_also_returns_you_to_the_edi_739079e6": {
    "message": "Dún roghchlár nó dialóg. Cuireann sé ar ais go dtí an limistéar eagarthóireachta thú freisin"
  },
  "close_accessibility_checker_29d1c51e": {
    "message": "Dún Seiceálaí Inrochtaineachta"
  },
  "close_d634289d": { "message": "Dún" },
  "closed_caption_file_must_be_less_than_maxkb_kb_5880f752": {
    "message": "Ní mór go mbeadh an comhad fotheideal dúnta níos lú ná { maxKb } kb"
  },
  "closed_captions_subtitles_e6aaa016": {
    "message": "Fotheidil/Fotheidil Dúnta"
  },
  "clubs_suit_c1ffedff": { "message": "Clubanna (Suit)" },
  "collaborations_5c56c15f": { "message": "Comhoibrithe" },
  "collapse_to_hide_types_1ab46d2e": {
    "message": "Leacaigh chun { types } chur i bhfolach"
  },
  "color_picker_6b359edf": { "message": "Roghnóir Dathanna" },
  "color_picker_colorname_selected_ad4cf400": {
    "message": "Roghnóir Dathanna ({ colorName } roghnaithe)"
  },
  "column_e1ae5c64": { "message": "Colún" },
  "column_group_1c062368": { "message": "Grúpa colún" },
  "complex_numbers_a543d004": { "message": "Uimhreacha Coimpléascacha" },
  "compose_44c904f4": { "message": "Cum" },
  "computer_1d7dfa6f": { "message": "Ríomhaire" },
  "congruent_5a244acd": { "message": "Iomchuí" },
  "contains_311f37b7": { "message": "Tá an méid seo ann" },
  "content_1440204b": { "message": "Ábhar" },
  "content_in_the_editor_will_be_changed_press_cancel_d5bf3357": {
    "message": "Athrófar ábhar san eagarthóir. Brúigh Cealaigh chun an t-ábhar bunaidh a choinneáil."
  },
  "content_is_still_being_uploaded_if_you_continue_it_8f06d0cb": {
    "message": "Tá an ábhar fós á uaslódáil, má leanann tú ar aghaidh ní bheidh sé leabaithe i gceart."
  },
  "content_subtype_5ce35e88": { "message": "Fochineál Ábhar" },
  "content_type_2cf90d95": { "message": "Cineál Ábhar" },
  "coproduct_e7838082": { "message": "Comhtháirge" },
  "copy_9748f9f": { "message": "Cóipeáil" },
  "copyright_holder_66ee111": { "message": "Sealbhóir Cóipchirt:" },
  "could_not_insert_content_itemtype_items_are_not_cu_638dfecd": {
    "message": "Níorbh fhéidir ábhar a chur isteach: Ní thacaítear le míreanna \"{ itemType }\" i gCanvas faoi láthair."
  },
  "count_40eced3b": { "message": "Áireamh" },
  "count_plural_0_0_words_one_1_word_other_words_acf32eca": {
    "message": "{ count, plural,\n     =0 {0 focal}\n    one {1 focal}\n  other {An líon seo focail: #}\n}"
  },
  "count_plural_one_item_loaded_other_items_loaded_857023b7": {
    "message": "{ count, plural,\n    one {# mír lódáite}\n  other {# míreanna lódáilte}\n}"
  },
  "course_documents_104d76e0": { "message": "Doiciméid an Chúrsa" },
  "course_files_62deb8f8": { "message": "Comhaid an Chúrsa" },
  "course_files_a31f97fc": { "message": "Comhaid an chúrsa" },
  "course_images_f8511d04": { "message": "Íomhánna an Chúrsa" },
  "course_link_b369426": { "message": "Nasc an Chúrsa" },
  "course_links_b56959b9": { "message": "Naisc an Chúrsa" },
  "course_media_ec759ad": { "message": "Meáin an Chúrsa" },
  "course_navigation_dd035109": { "message": "Nascleanúint Cúrsa" },
  "create_icon_110d6463": { "message": "Cruthaigh Deilbhín" },
  "create_icon_maker_icon_c716bffe": {
    "message": "Cruthaigh Dheilbhín Déantóir Deilbhín"
  },
  "creative_commons_license_725584ae": {
    "message": "zCeadúnas Creative Commons:"
  },
  "crop_image_41bf940c": { "message": "Bearr Íomhá" },
  "crop_image_807ebb08": { "message": "Bearr Íomhá" },
  "cup_product_14174434": { "message": "Táirge Corn" },
  "current_image_f16c249c": { "message": "Íomhá Reatha" },
  "current_link_945a47ee": { "message": "Nasc Reatha" },
  "current_volume_level_c55ab825": { "message": "Leibhéal Fuaime Reatha" },
  "custom_6979cd81": { "message": "Saincheaptha" },
  "custom_width_and_height_pixels_946eea7c": {
    "message": "Leithead agus airde saincheaptha (Picteilín)"
  },
  "cyan_c1d5f68a": { "message": "Cian" },
  "dagger_57e0f4e5": { "message": "Oibil" },
  "date_added_ed5ad465": { "message": "Dáta a Chuireadh É" },
  "decorative_icon_9a7f3fc3": { "message": "Deilbhín Maisiúil" },
  "decorative_image_fde98579": { "message": "Íomhá maisiúil" },
  "decorative_type_upper_f2c95e3": { "message": "Maisiúil { TYPE_UPPER }" },
  "decrease_indent_d9cf469d": { "message": "Laghdaigh Eangú" },
  "deep_purple_bb3e2907": { "message": "Dúchorcra" },
  "default_bulleted_unordered_list_47079da8": {
    "message": "liosta gan ordú réamhshocraithe le hurchair"
  },
  "default_numerical_ordered_list_48dd3548": {
    "message": "liosta ordaithe uimhriúil réamhshocraithe le hurchair"
  },
  "definite_integral_fe7ffed1": { "message": "Slánuimhreach Cinnte" },
  "degree_symbol_4a823d5f": { "message": "Siombail Céime" },
  "delimiters_4db4840d": { "message": "Teorainneoirí" },
  "delta_53765780": { "message": "Deilte" },
  "describe_the_icon_f6a18823": {
    "message": "(Déan cur síos ar an ndeilbhín)"
  },
  "describe_the_type_ff448da5": { "message": "(Déan cur síos ar an { TYPE })" },
  "describe_the_video_2fe8f46a": {
    "message": "(Déan cur síos ar an bhfíseán)"
  },
  "description_436c48d7": { "message": "Cur síos" },
  "details_98a31b68": { "message": "Sonraí" },
  "diagonal_dots_7d71b57e": { "message": "Poncanna Trasnánach" },
  "diamond_b8dfe7ae": { "message": "Diamaint" },
  "diamonds_suit_526abaaf": { "message": "diamaint (culaith)" },
  "digamma_258ade94": { "message": "Diagama" },
  "dimension_type_f5fa9170": { "message": "Cineál Toise" },
  "dimensions_45ddb7b7": { "message": "Toisí" },
  "directionality_26ae9e08": { "message": "Treoúlacht" },
  "directly_edit_latex_b7e9235b": {
    "message": "Cuir LaTeX in Eagar go Díreach"
  },
  "disable_preview_222bdf72": { "message": "Díchumasaigh Réamhamharc" },
  "discussion_6719c51d": { "message": "Fóram" },
  "discussions_a5f96392": { "message": "Fóraim" },
  "discussions_index_6c36ced": { "message": "Innéacs Fóraim" },
  "disjoint_union_e74351a8": { "message": "Aontas Scartha" },
  "dislike_14befc48": { "message": "Tabhair ‘ní maith liom’ dó" },
  "display_options_315aba85": { "message": "Roghanna Taispeána" },
  "display_text_link_opens_in_a_new_tab_75e9afc9": {
    "message": "Taispeáin Nasc Téacs (Osclaítear i táb nua é)"
  },
  "division_sign_72190870": { "message": "Comhartha Rannóige" },
  "document_678cd7bf": { "message": "Doiciméad" },
  "documents_81393201": { "message": "Doiciméid" },
  "done_54e3d4b6": { "message": "Déanta" },
  "double_dagger_faf78681": { "message": "Oibil Dúbailte" },
  "down_5831a426": { "message": "Síos" },
  "down_and_left_diagonal_arrow_40ef602c": {
    "message": "Saighead Trasnánach Síos Agus Ar Chlé"
  },
  "down_and_right_diagonal_arrow_6ea0f460": {
    "message": "Saighead Trasnánach Síos Agus Ar Dheis"
  },
  "download_filename_2baae924": { "message": "Íoslódáil { filename }" },
  "downward_arrow_cca52012": { "message": "Saighead Anuas" },
  "downward_pointing_triangle_2a12a601": {
    "message": "Triantán ag Pointeáil Anuas"
  },
  "drag_a_file_here_1bf656d5": { "message": "Tarraing comhad anseo" },
  "drag_and_drop_or_click_to_browse_your_computer_60772d6d": {
    "message": "Tarraing agus scaoil, nó cliceáil chun do ríomhaire a bhrabhsáil"
  },
  "drag_handle_use_up_and_down_arrows_to_resize_e29eae5c": {
    "message": "Tarraing lámh. Bain úsáid as saigheada suas agus síos chun méid a athrú"
  },
  "due_multiple_dates_cc0ee3f5": { "message": "Dlite: dátaí Iolracha" },
  "due_when_7eed10c6": { "message": "Dlite: { when }" },
  "edit_alt_text_for_this_icon_instance_9c6fc5fd": {
    "message": "Cuir téacs alt in eagar don chás deilbhín seo"
  },
  "edit_c5fbea07": { "message": "Cuir in eagar" },
  "edit_course_link_5a5c3c59": { "message": "Cuir Nasc an Chúrsa in Eagar" },
  "edit_equation_f5279959": { "message": "Cuir Cothromóid in Eagar" },
  "edit_existing_icon_maker_icon_5d0ebb3f": {
    "message": "Cuir Deilbhín Déantóra Deilbhín Reatha in Eagar"
  },
  "edit_icon_2c6b0e91": { "message": "Cuir Deilbhín in Eagar" },
  "edit_link_7f53bebb": { "message": "Cuir Nasc in Eagar" },
  "editor_status_bar_653f44ee": { "message": "Barra Stádais Eagarthóra" },
  "element_starting_with_start_91bf4c3b": {
    "message": "Eilimint ag tosú le { start }"
  },
  "embed_828fac4a": { "message": "Leabaigh" },
  "embed_code_314f1bd5": { "message": "Leabaigh Cód" },
  "embed_content_from_external_tool_3397ad2d": {
    "message": "Leabaigh ábhar ón Uirlis Sheachtrach"
  },
  "embed_image_1080badc": { "message": "Leabaigh Íomhá" },
  "embed_video_a97a64af": { "message": "Leabaigh Físeán " },
  "embedded_content_aaeb4d3d": { "message": "ábhar leabaithe" },
  "empty_set_91a92df4": { "message": "Tacar Folamh" },
  "encircled_dot_8f5e51c": { "message": "Ponc Timpeallaithe" },
  "encircled_minus_72745096": { "message": "Lúide Timpeallaithe" },
  "encircled_plus_36d8d104": { "message": "Móide Timpeallaithe" },
  "encircled_times_5700096d": { "message": "Amanna Timpeallaithe" },
  "engineering_icon_f8f3cf43": { "message": "Deilbhín Innealtóireachta" },
  "english_icon_25bfe845": { "message": "Deilbhín Béarla" },
  "enter_at_least_3_characters_to_search_4f037ee0": {
    "message": "Cuir isteach 3 charachtar ar a laghad le cuardaigh"
  },
  "enter_replacement_text_17631bbc": {
    "message": "cuir isteach téacs athsholáthair"
  },
  "enter_search_text_26cb4459": { "message": "cuir isteach téacs cuardaigh" },
  "enter_text_8b35c65b": { "message": "Cuir isteach téacs" },
  "epsilon_54bb8afa": { "message": "Eipsealón" },
  "epsilon_variant_d31f1e77": { "message": "Eipsealón (Athraithe)" },
  "equals_sign_c51bdc58": { "message": "Comhartha Comhionann" },
  "equation_1c5ac93c": { "message": "Cothromóid" },
  "equation_editor_39fbc3f1": { "message": "Eagarthóir Cothromóid" },
  "equilibrium_6ff3040b": { "message": "Cothromaíocht" },
  "equivalence_class_7b0f11c0": { "message": "Rang Coibhéise" },
  "equivalent_identity_654b3ce5": { "message": "Coibhéis (Aitheantas)" },
  "eta_b8828f99": { "message": "Éite" },
  "exists_2e62bdaa": { "message": "Ann" },
  "exit_fullscreen_b7eb0aa4": { "message": "Scoir Lánscáileán" },
  "expand_preview_by_default_2abbf9f8": {
    "message": "Leathnaigh réamhamharc de réir réamhshocraithe"
  },
  "expand_to_see_types_f5d29352": {
    "message": "Leathnaigh chun { types } a fheiceáil"
  },
  "external_link_d3f9e62a": { "message": "Nasc Seachtrach" },
  "external_tool_frame_70b32473": { "message": "Fráma uirlis sheachtrach" },
  "external_tools_6e77821": { "message": "Uirlisí Sheachtracha" },
  "extra_large_b6cdf1ff": { "message": "An-Mhór" },
  "extra_small_9ae33252": { "message": "An-Bheag" },
  "extracurricular_icon_67c8ca42": { "message": "Deilbhín Seach-churaclaim" },
  "f_function_fe422d65": { "message": "F (feidhm)" },
  "failed_getting_file_contents_e9ea19f4": {
    "message": "Theip ar ábhar an chomhaid a fháil"
  },
  "failed_to_copy_response_d3def551": {
    "message": "Theip an freagra a choipeáil"
  },
  "failed_to_retrieve_content_from_external_tool_5899c213": {
    "message": "Theip ar ábhar a aisghabháil ón uirlis sheachtrach"
  },
  "file_name_8fd421ff": { "message": "Ainm comhaid" },
  "file_storage_quota_exceeded_b7846cd1": {
    "message": "Sáraíodh an cuóta stórais comhaid"
  },
  "file_url_c12b64be": { "message": "URL an chomhaid" },
  "filename_file_icon_602eb5de": { "message": "Deilbhín comhaid { filename }" },
  "filename_image_preview_6cef8f26": {
    "message": "Réamhamharc íomhá { filename }"
  },
  "filename_text_preview_e41ca2d8": {
    "message": "Réamhamharc téacs { filename }"
  },
  "files_c300e900": { "message": "Comhaid" },
  "files_index_af7c662b": { "message": "Innéacs Comhaid" },
  "find_8d605019": { "message": "Aimsigh" },
  "find_and_replace_6e345933": { "message": "Aimsigh agus Athraigh" },
  "finish_bc343002": { "message": "Críochnaigh" },
  "fix_heading_hierarchy_f60884c4": {
    "message": "Deisigh ordlathas ceannteidil"
  },
  "flat_music_76d5a5c3": { "message": "Maol (Ceol)" },
  "focus_element_options_toolbar_18d993e": {
    "message": "Barra uirlisí roghanna gné fócais"
  },
  "folder_tree_fbab0726": { "message": "Crann fillteáin" },
  "for_all_b919f972": { "message": "Do Chách" },
  "format_4247a9c5": { "message": "Formáid" },
  "format_as_a_list_142210c3": { "message": "Formáid mar liosta" },
  "formatting_5b143aa8": { "message": "Ag Formáidiú" },
  "forward_slash_3f90f35e": { "message": "Slais Ar aghaidh" },
  "found_auto_saved_content_3f6e4ca5": {
    "message": "Aimsíodh ábhar uath-shábháilte"
  },
  "found_count_plural_0_results_one_result_other_resu_46aeaa01": {
    "message": "Aimsíodh { count, plural,\n     =0 {# torthaí}\n    one {# toradh}\n  other {# torthaí}\n}"
  },
  "fraction_41bac7af": { "message": "Codán" },
  "fullscreen_873bf53f": { "message": "Scáileán iomlán" },
  "gamma_1767928": { "message": "Gáma" },
  "generating_preview_45b53be0": { "message": "Réamhamharc á giniúint..." },
  "gif_png_format_images_larger_than_size_kb_are_not__7af3bdbd": {
    "message": "Ní thacaítear le híomhánna formáid GIF/GGI níos mó ná { size } KB faoi láthair."
  },
  "go_to_the_editor_s_menubar_e6674c81": {
    "message": "Téigh go barra roghchláir an eagarthóra"
  },
  "go_to_the_editor_s_toolbar_a5cb875f": {
    "message": "Téigh go barra uirlisí an eagarthóra"
  },
  "grades_a61eba0a": { "message": "Marcanna" },
  "greater_than_e98af662": { "message": "Níos mó ná" },
  "greater_than_or_equal_b911949a": { "message": "Níos Mó ná Nó Comhionann" },
  "greek_65c5b3f7": { "message": "Gréigis" },
  "green_15af4778": { "message": "Glas" },
  "grey_a55dceff": { "message": "Liath" },
  "group_documents_8bfd6ae6": { "message": "Doiciméid Ghrúpa" },
  "group_files_4324f3df": { "message": "Comhaid Ghrúpa" },
  "group_files_82e5dcdb": { "message": "Comhaid ghrúpa" },
  "group_images_98e0ac17": { "message": "Íomhánna Grúpa" },
  "group_isomorphism_45b1458c": { "message": "Iseamorfacht Grúpa" },
  "group_link_63e626b3": { "message": "Nasc Grúpa" },
  "group_links_9493129e": { "message": "Naisc Ghrúpa" },
  "group_media_2f3d128a": { "message": "Meáin Ghrúpa" },
  "group_navigation_99f191a": { "message": "Nascleanúint Ghrúpa" },
  "h_bar_bb94deae": { "message": "Barra H" },
  "hat_ea321e35": { "message": "Hata" },
  "header_column_f27433cb": { "message": "Colún ceanntásca" },
  "header_row_and_column_ec5b9ec": {
    "message": "Sraith ceanntásca agus colún"
  },
  "header_row_f33eb169": { "message": "Sraith ceanntásca" },
  "heading_2_5b84eed2": { "message": "Ceannteideal 2" },
  "heading_3_2c83de44": { "message": "Ceannteideal 3" },
  "heading_4_b2e74be7": { "message": "Ceannteideal 4" },
  "heading_levels_should_not_be_skipped_3947c0e0": {
    "message": "Níor cheart leibhéil ceannteidil a scipeáil."
  },
  "heading_starting_with_start_42a3e7f9": {
    "message": "Ceannteideal ag tosú le { start }"
  },
  "headings_should_not_contain_more_than_120_characte_3c0e0cb3": {
    "message": "Níor cheart go mbeadh níos mó ná 120 carachtar sna ceannteidil."
  },
  "health_icon_8d292eb5": { "message": "Deilbhín Sláinte" },
  "hearts_suit_e50e04ca": { "message": "Hart (Dath)" },
  "height_69b03e15": { "message": "Airde" },
  "hello_please_describe_the_modifications_you_would__49b19837": {
    "message": "Dia duit. Déan cur síos le do thoil ar na mionathruithe ar mhaith leat a dhéanamh ar do phíosa."
  },
  "hello_please_describe_the_modifications_you_would__600dbbf0": {
    "message": "Dia duit. Déan cur síos le do thoil ar na mionathruithe ar mhaith leat a dhéanamh ar do rogha."
  },
  "hexagon_d8468e0d": { "message": "Heicseagán" },
  "hide_description_bfb5502e": { "message": "Cuir cur síos i bhfolach" },
  "hide_title_description_caf092ef": {
    "message": "Cuir cur síos { title } i bhfolach"
  },
  "highlight_an_element_to_activate_the_element_optio_60e1e56b": {
    "message": "Aibhsigh eilimint chun an barra uirlisí roghanna eiliminte a ghníomhachtú"
  },
  "home_351838cd": { "message": "Baile" },
  "html_code_editor_fd967a44": { "message": "Eagarthóir cód html" },
  "html_editor_fb2ab713": { "message": "Eagarthóir HTML" },
  "i_have_obtained_permission_to_use_this_file_6386f087": {
    "message": "Tá cead faighte agam an comhad seo a úsáid."
  },
  "i_hold_the_copyright_71ee91b1": { "message": "Tá an cóipcheart agam" },
  "i_m_sorry_but_i_cannot_find_the_ai_s_answer_67569d19": {
    "message": "Tá brón orm, ach ní féidir liom teacht ar fhreagra IS"
  },
  "icon_215a1dc6": { "message": "Deilbhín" },
  "icon_8168b2f8": { "message": "deibhlín" },
  "icon_color_b86dd6d6": { "message": "Dath Deilbhín" },
  "icon_maker_icons_cc560f7e": { "message": "Deilbhíní Déantóir Deilbhín" },
  "icon_options_7e32746e": { "message": "Roghanna Deilbhín" },
  "icon_options_tray_2b407977": { "message": "Tráidire Roghanna Deilbhín" },
  "icon_preview_1782a1d9": { "message": "Réamhamharc Deilbhín" },
  "icon_shape_30b61e7": { "message": "Cruth Deilbhín" },
  "icon_size_9353edea": { "message": "Méid Deilbhín" },
  "if_left_empty_link_text_will_display_as_course_lin_2a34eedb": {
    "message": "Má fhágtar folamh é, taispeánfar téacs naisc mar ainm naisc an chúrsa"
  },
  "if_usage_rights_are_required_the_file_will_not_pub_841e276e": {
    "message": "Má theastaíonn Cearta Úsáide, ní fhoilseofar an comhad go dtí go mbeidh sé cumasaithe ar an leathanach Comhaid."
  },
  "if_you_do_not_select_usage_rights_now_this_file_wi_14e07ab5": {
    "message": "Mura roghnaíonn tú cearta úsáide anois, beidh an comhad seo neamhfhoilsithe tar éis é a uaslódáil."
  },
  "image_8ad06": { "message": "Íomhá" },
  "image_c1c98202": { "message": "íomha" },
  "image_filenames_should_not_be_used_as_the_alt_attr_bcfd7780": {
    "message": "Níor cheart comhaid íomhá a úsáid mar an tréith alt a chuireann síos ar ábhar na híomhá."
  },
  "image_options_5412d02c": { "message": "Roghanna Íomhá" },
  "image_options_tray_90a46006": { "message": "Tráidire Roghanna Íomhá" },
  "image_to_crop_3a34487d": { "message": "Íomhá le bearradh" },
  "image_with_filename_file_aacd7180": {
    "message": "Íomhá le hainm comhaid { file }"
  },
  "images_7ce26570": { "message": "Íomhánna" },
  "images_should_include_an_alt_attribute_describing__b86d6a86": {
    "message": "Ba chóir go gcuimseoidh tréith alt ag cur síos ar ábhar na híomhá sna híomhánna."
  },
  "imaginary_portion_of_complex_number_2c733ffa": {
    "message": "Cuid Shamhailteach (d''Uimhir Choimpléascach)"
  },
  "in_element_of_19ca2f33": { "message": "I (Gné De)" },
  "increase_indent_6af90f7c": { "message": "Méadaigh Eangach" },
  "indefinite_integral_6623307e": { "message": "Slánuimhreach Éiginnte" },
  "index_of_max_80dcf7a5": { "message": "{ index } de { max }" },
  "indigo_2035fc55": { "message": "Indeagó" },
  "inference_fed5c960": { "message": "Tátal" },
  "infinity_7a10f206": { "message": "Iliomad" },
  "insert_593145ef": { "message": "Cuir isteach" },
  "insert_link_6dc23cae": { "message": "Cuir Nasc Isteach" },
  "insert_math_equation_57c6e767": {
    "message": "Cuir Cothromóid Mhata Isteach"
  },
  "integers_336344e1": { "message": "Slánuimhreacha" },
  "intersection_cd4590e4": { "message": "Trasnú" },
  "invalid_entry_f7d2a0f5": { "message": "Iontráil neamhbhailí." },
  "invalid_file_c11ba11": { "message": "Comhad Neamhbhailí" },
  "invalid_file_type_881cc9b2": { "message": "Cineál comhaid neamhbhailí" },
  "invalid_url_cbde79f": { "message": "URL neamhbhailí" },
  "iota_11c932a9": { "message": "Ióta" },
  "issue_num_total_f94536cf": { "message": "Eisiúint { num }/{ total }" },
  "kappa_2f14c816": { "message": "Capa" },
  "kappa_variant_eb64574b": { "message": "Capa (Athróg)" },
  "keyboard_shortcuts_ed1844bd": { "message": "Aicearraí Méarchláir" },
  "keyboards_navigate_to_links_using_the_tab_key_two__5fab8c82": {
    "message": "Déanann méarchláir nascleanúint chuig naisc ag baint úsáid as an eochair Táb. Is féidir le dhá nasc cóngaracha a dhíríon chuig an gceann scríbe céanna mearbhall a chur ar úsáideoirí méarchláir."
  },
  "lambda_4f602498": { "message": "Lambda" },
  "language_arts_icon_a798b0f8": { "message": "Deilbhín Ealaíona Teanga" },
  "languages_icon_9d20539": { "message": "Deilbhín Teangacha" },
  "large_9c5e80e7": { "message": "Mór" },
  "learn_more_about_adjacent_links_2cb9762c": {
    "message": "Foghlaim tuilleadh faoi naisc in aice láimhe"
  },
  "learn_more_about_color_contrast_c019dfb9": {
    "message": "Foghlaim tuilleadh faoi chodarsnacht dathanna"
  },
  "learn_more_about_organizing_page_headings_8a7caa2e": {
    "message": "Foghlaim tuilleadh faoi cheannteidil leathanaigh a eagrú"
  },
  "learn_more_about_proper_page_heading_structure_d2959f2d": {
    "message": "Tuilleadh eolais faoi struchtúr ceart ceannteidil leathanaigh"
  },
  "learn_more_about_table_headers_5f5ee13": {
    "message": "Foghlaim tuilleadh faoi cheanntásca tábla"
  },
  "learn_more_about_using_alt_text_for_images_5698df9a": {
    "message": "Foghlaim tuilleadh faoi théacs alt a úsáid le haghaidh íomhánna"
  },
  "learn_more_about_using_captions_with_tables_36fe496f": {
    "message": "Foghlaim tuilleadh faoi úsáid a bhaint as fotheidil le táblaí"
  },
  "learn_more_about_using_filenames_as_alt_text_264286af": {
    "message": "Foghlaim tuilleadh faoi ainmneacha comhaid a úsáid mar théacs alt"
  },
  "learn_more_about_using_lists_4e6eb860": {
    "message": "Foghlaim tuilleadh faoi liostaí a úsáid"
  },
  "learn_more_about_using_scope_attributes_with_table_20df49aa": {
    "message": "Foghlaim tuilleadh faoi úsáid a bhaint as tréithe scóip le táblaí"
  },
  "leave_as_is_4facfe55": { "message": "Fág mar atá" },
  "left_3ea9d375": { "message": "Ar chlé" },
  "left_align_43d95491": { "message": "Ailíniú Ar Chlé " },
  "left_angle_bracket_c87a6d07": { "message": "Lúibín Uillinn Chlé" },
  "left_arrow_4fde1a64": { "message": "Saighead Chlé" },
  "left_arrow_with_hook_5bfcad93": { "message": "Saighead Chlé Le Hook" },
  "left_ceiling_ee9dd88a": { "message": "Uasteorainn Chlé" },
  "left_curly_brace_1726fb4": { "message": "Lúibín Slabhrach Ar Chlé" },
  "left_downard_harpoon_arrow_1d7b3d2e": {
    "message": "Saighead Harpún Aníos Ar chlé "
  },
  "left_floor_29ac2274": { "message": "Urlár Clé" },
  "left_to_right_e9b4fd06": { "message": "Clé-go-Deas" },
  "left_upward_harpoon_arrow_3a562a96": {
    "message": "Saighead Harpún Anuas Ar Chlé"
  },
  "leftward_arrow_1e4765de": { "message": "Saighead Chlé" },
  "leftward_pointing_triangle_d14532ce": {
    "message": "Triantán ag Pointeái ar Chlé"
  },
  "less_than_a26c0641": { "message": "Níos lú ná" },
  "less_than_or_equal_be5216cb": { "message": "Níos lú ná Nó Comhionann" },
  "library_icon_ae1e54cf": { "message": "Deilbhín Leabharlainne" },
  "light_blue_5374f600": { "message": "Bánghorm" },
  "link_7262adec": { "message": "Nasc" },
  "link_options_a16b758b": { "message": "Roghanna Nasc" },
  "link_type_linktypemessage_c6d26815": {
    "message": "cineál naisc: { linkTypeMessage }"
  },
  "link_with_text_starting_with_start_b3fcbe71": {
    "message": "Nasc le téacs ag tosú le { start }"
  },
  "links_14b70841": { "message": "Naisc" },
  "links_to_an_external_site_de74145d": {
    "message": "Naisc chuig suíomh seachtrach."
  },
  "lists_cd1336fc": { "message": "Liostaí" },
  "lists_should_be_formatted_as_lists_f862de8d": {
    "message": "Ba cheart liostaí a fhormáidiú mar liostaí."
  },
  "load_more_35d33c7": { "message": "Lódáil Tuilleadh" },
  "loading_25990131": { "message": "Ag lódáil..." },
  "loading_bde52856": { "message": "Ag lódáil" },
  "loading_closed_captions_subtitles_failed_95ceef47": {
    "message": "Theip ar lódáil fotheidil/fotheidil dúnta."
  },
  "loading_external_tool_d839042c": {
    "message": "Uirlis Sheachtrach á lódáil"
  },
  "loading_failed_b3524381": { "message": "Theip ar an lódáil..." },
  "loading_failed_e6a9d8ef": { "message": "Theip ar an lódáil." },
  "loading_folders_d8b5869e": { "message": "Fillteáin á lódáil" },
  "loading_placeholder_for_filename_792ef5e8": {
    "message": "Ag lódáil ionadaí le haghaidh { fileName }"
  },
  "loading_please_wait_d276220a": { "message": "Ag lódáil, fan le do thoil" },
  "loading_preview_9f077aa1": { "message": "Réamhamharc á lódáil" },
  "locked_762f138b": { "message": "Faoi ghlas" },
  "logical_equivalence_76fca396": { "message": "Coibhéis Loighciúil" },
  "logical_equivalence_short_8efd7b4f": {
    "message": "Coibhéis Loighciúil (Gearr)"
  },
  "logical_equivalence_short_and_thick_1e1f654d": {
    "message": "Coibhéis Loighciúil (Gearr agus Tiubh)"
  },
  "logical_equivalence_thick_662dd3f2": {
    "message": "Coibhéis Loighciúil (Tiubh)"
  },
  "low_horizontal_dots_cc08498e": { "message": "Poncanna Cothrománacha Íseal" },
  "magenta_4a65993c": { "message": "Mageanta" },
  "maps_to_e5ef7382": { "message": "Léarscáileanna Chuig" },
  "math_icon_ad4e9d03": { "message": "Deilbhín Mata" },
  "media_af190855": { "message": "Meáin" },
  "media_file_is_processing_please_try_again_later_58a6d49": {
    "message": "Tá comhad meáin á phróiseáil. Bain triail eile as ar ball."
  },
  "media_title_2112243b": { "message": "Teideal Meáin" },
  "medium_5a8e9ead": { "message": "Meán" },
  "merge_links_2478df96": { "message": "Cumaisc naisc" },
  "mic_a7f3d311": { "message": "Mic" },
  "microphone_disabled_15c83130": { "message": "Micreafón faoi Mhíchumas" },
  "middle_27dc1d5": { "message": "Meánach" },
  "minimize_file_preview_da911944": {
    "message": "Íoslaghdaigh Réamhamhairc Comhaid"
  },
  "minimize_video_20aa554b": { "message": "Íoslaghdaigh Físeán" },
  "minus_fd961e2e": { "message": "Lúide" },
  "minus_plus_3461f637": { "message": "Lúide/Móide" },
  "misc_3b692ea7": { "message": "Ilchineál" },
  "miscellaneous_e9818229": { "message": "Ilchineálach" },
  "modify_6b0b13e3": { "message": "Athraigh" },
  "module_90d9fd32": { "message": "Modúl" },
  "modules_c4325335": { "message": "Modúil" },
  "moving_image_to_crop_directionword_6f66cde2": {
    "message": "Ag bogadh íomhá chun { directionWord } a bharr"
  },
  "mu_37223b8b": { "message": "Mu" },
  "multi_color_image_63d7372f": { "message": "Íomhá Ildath" },
  "multiplication_sign_15f95c22": { "message": "Comhartha Iolrúcháin" },
  "music_icon_4db5c972": { "message": "Deilbhín Ceoil" },
  "my_files_2f621040": { "message": "Mo chomhaid" },
  "n_th_root_9991a6e4": { "message": "N-th Fréamh" },
  "nabla_1e216d25": { "message": "Nabla" },
  "name_1aed4a1b": { "message": "Ainm" },
  "name_color_ceec76ff": { "message": "{ name } ({ color })" },
  "natural_music_54a70258": { "message": "Nádúrtha (Ceol)" },
  "natural_numbers_3da07060": { "message": "Uimhreacha Nádúrtha" },
  "navigate_through_the_menu_or_toolbar_415a4e50": {
    "message": "Déan nascleanúint tríd an roghchlár nó barra uirlisí"
  },
  "navigation_ee9af92d": { "message": "Nascleanúint" },
  "nested_greater_than_d852e60d": { "message": "Neadaithe Níos Mó ná" },
  "nested_less_than_27d17e58": { "message": "Neadaithe Níos lú ná" },
  "new_quiz_34aacba6": { "message": "Quiz Nua" },
  "next_40e12421": { "message": "Ar aghaidh" },
  "next_findtext_9d69f0fe": { "message": "An chéad { findText } eile" },
  "no_accessibility_issues_were_detected_f8d3c875": {
    "message": "Níor aimsíodh aon saincheisteanna inrochtaineachta."
  },
  "no_announcements_created_yet_c44a94f4": {
    "message": "Níl aon fhógraí cruthaithe go fóill."
  },
  "no_announcements_found_20185afc": {
    "message": "Níor aimsíodh aon fhógraí."
  },
  "no_assignments_created_yet_1b236d87": {
    "message": "Níl tascanna cruthaithe go fóill."
  },
  "no_assignments_found_79e46d7f": { "message": "Níor aimsíodh tascanna." },
  "no_changes_to_save_d29f6e91": { "message": "Níl aon athruithe le sábháil." },
  "no_discussions_created_yet_ff99abe3": {
    "message": "Níor cruthaíodh aon fhóram go fóill."
  },
  "no_discussions_found_9284063b": { "message": "Níor aimsíodh aon fhóram." },
  "no_e16d9132": { "message": "Níl" },
  "no_file_chosen_9a880793": { "message": "Níor roghnaíodh comhad" },
  "no_headers_9bc7dc7f": { "message": "Gan ceanntásca" },
  "no_modules_created_yet_c71b6d4d": {
    "message": "Níl aon mhodúil cruthaithe go fóill."
  },
  "no_modules_found_2df43a40": { "message": "Níor aimsíodh modúil ar bith." },
  "no_pages_created_yet_c379fa6e": {
    "message": "Níl aon leathanach cruthaithe go fóill."
  },
  "no_pages_found_6799350": { "message": "Níor aimsíodh leathanaigh." },
  "no_preview_is_available_for_this_file_f940114a": {
    "message": "Níl réamhamharc ar fáil don chomhad seo."
  },
  "no_quizzes_created_yet_1a2370b9": {
    "message": "Níl aon quizeanna cruthaithe go fóill."
  },
  "no_quizzes_found_c80c537a": { "message": "Níor aimsíodh aon quizeanna." },
  "no_results_940393cf": { "message": "Gan torthaí." },
  "no_results_found_58717065": { "message": "Níor aimsíodh aon toradh" },
  "no_results_found_for_filterterm_ad1b04c8": {
    "message": "Níor aimsíodh aon torthaí le haghaidh { filterTerm }"
  },
  "no_video_1ed00b26": { "message": "Níl aon Fhíseán" },
  "none_3b5e34d2": { "message": "Dada" },
  "none_selected_b93d56d2": { "message": "Níl aon cheann roghnaithe" },
  "not_equal_6e2980e6": { "message": "Ní Comhionann le" },
  "not_in_not_an_element_of_fb1ffb54": {
    "message": "Nach bhfuil ann (Nach bhfuil mar Ghné De)"
  },
  "not_negation_1418ebb8": { "message": "Ní (Diúltú)" },
  "not_subset_dc2b5e84": { "message": "Ní Fo-thacar é" },
  "not_subset_strict_23d282bf": { "message": "Ní Fo-thacar é (Dian)" },
  "not_superset_5556b913": { "message": "Ní Sárthacar é" },
  "not_superset_strict_24e06f36": { "message": "Ní Shárthacar é (Dian)" },
  "nu_1c0f6848": { "message": "Nu" },
  "octagon_e48be9f": { "message": "Ochtagán" },
  "olive_6a3e4d6b": { "message": "Ológ" },
  "omega_8f2c3463": { "message": "Óimige" },
  "one_of_the_following_styles_must_be_added_to_save__1de769aa": {
    "message": "Ní mór ceann de na stíleanna seo a leanas a chur leis chun deilbhín a shábháil: Dath Deilbhín, Méid Imlíne, Téacs Deilbhín, nó Íomhá"
  },
  "one_or_more_files_failed_to_paste_please_try_uploa_7fa39dd3": {
    "message": "Theip ar chomhad amháin nó níos mó a ghreamú. Déan iarracht comhaid a uaslódáil nó a tharraingt agus a scaoileadh."
  },
  "open_circle_e9bd069": { "message": "Oscail Ciorcal" },
  "open_this_keyboard_shortcuts_dialog_9658b83a": {
    "message": "Oscail an dialóg aicearraí méarchláir seo"
  },
  "open_title_application_fd624fc5": {
    "message": "Oscail feidhmchlár { title }"
  },
  "operators_a2ef9a93": { "message": "Oibreoirí" },
  "or_9b70ccaa": { "message": "Nó" },
  "orange_81386a62": { "message": "Oráiste" },
  "ordered_and_unordered_lists_cfadfc38": {
    "message": "Liostaí Ordaithe agus Neamhordaithe"
  },
  "other_editor_shortcuts_may_be_found_at_404aba4a": {
    "message": "Is féidir aicearraí eile d’eagarthóirí a fháil ag"
  },
  "outline_color_3ef2cea7": { "message": "Dath Imlíne" },
  "outline_size_a6059a21": { "message": "Méid Imlíne" },
  "p_is_not_a_valid_protocol_which_must_be_ftp_http_h_adf13fc2": {
    "message": "Ní prótacal bailí é { p } nach mór a bheith ftp, http, https, mailto, skype, teil nó is féidir é a fhágáil ar lár"
  },
  "page_50c4823d": { "message": "Leathanach" },
  "pages_e5414c2c": { "message": "Leathanaigh" },
  "paragraph_5e5ad8eb": { "message": "Alt" },
  "paragraph_starting_with_start_a59923f8": {
    "message": "Alt ag tosú le { start }"
  },
  "parallel_d55d6e38": { "message": "Comhthreomhar" },
  "partial_derivative_4a9159df": { "message": "Páirteach (Díorthaigh)" },
  "paste_5963d1c1": { "message": "Greamaigh" },
  "pause_12af3bb4": { "message": "Cuir ar Sos" },
  "pentagon_17d82ea3": { "message": "Peinteagán" },
  "people_b4ebb13c": { "message": "Daoine" },
  "percentage_34ab7c2c": { "message": "Céatadán" },
  "percentage_must_be_a_number_8033c341": {
    "message": "Caithfidh an céatadán a bheith ina uimhir"
  },
  "performing_arts_icon_f3497486": { "message": "Deilbhín na Taibhealaíona" },
  "perpendicular_7c48ede4": { "message": "Ingearach" },
  "phi_4ac33b6d": { "message": "Fí" },
  "phi_variant_c9bb3ac5": { "message": "Fí (Leagan Malartach)" },
  "physical_education_icon_d7dffd3e": { "message": "Deilbhín Corpoideachais" },
  "pi_dc4f0bd8": { "message": "Pí" },
  "pi_variant_10f5f520": { "message": "Pí (Leagan Malartach)" },
  "pink_68ad45cb": { "message": "Bándearg" },
  "pixels_52ece7d1": { "message": "Picteilíní" },
  "play_1a47eaa7": { "message": "Imir" },
  "play_media_comment_35257210": { "message": "Seinn ráiteas meáin." },
  "play_media_comment_by_name_from_createdat_c230123d": {
    "message": "Seinn ráiteas meáin ag { name } ó { createdAt }."
  },
  "please_allow_canvas_to_access_your_microphone_and__dc2c3079": {
    "message": "Tabhair cead do Canvas rochtain a fháil ar do mhicreafón agus ceamara gréasáin."
  },
  "please_decribe_what_you_would_like_to_compose_27a51be5": {
    "message": "Déan cur síos le do thoil ar cad ba mhaith leat a chumadh."
  },
  "plus_d43cd4ec": { "message": "Móide" },
  "plus_minus_f8be2e83": { "message": "Móide/Lúide" },
  "posted_when_a578f5ab": { "message": "Postáilte: { when }" },
  "power_set_4f26f316": { "message": "Tacar Cumhacht" },
  "precedes_196b9aef": { "message": "Tagann sé Roimh" },
  "precedes_equal_20701e84": { "message": "Tagann sé Roimh Comhionann" },
  "preformatted_d0670862": { "message": "Réamhfhormáidithe" },
  "prepend_findtext_append_8e0e769a": {
    "message": "{ prepend }{ findText }{ append }"
  },
  "prev_f82cbc48": { "message": "Roimhe seo" },
  "preview_53003fd2": { "message": "Réamhamharc" },
  "preview_a3f8f854": { "message": "RÉAMHAMHARC" },
  "preview_in_overlay_ed772c46": { "message": "Réamhamharc i bhforleagan" },
  "preview_inline_9787330": { "message": "Réamhamharc inlíne" },
  "previous_bd2ac015": { "message": "Roimhe Seo" },
  "previous_findtext_8dfbfd30": { "message": "Roimhe Seo { findText }" },
  "prime_917ea60e": { "message": "Príomha" },
  "prime_numbers_13464f61": { "message": "Príomhuimhreacha" },
  "product_39cf144f": { "message": "Táirge" },
  "proportional_f02800cc": { "message": "Comhréireach" },
  "protocol_must_be_ftp_http_https_mailto_skype_tel_o_73beb4f8": {
    "message": "Caithfidh an prótacal a bheith ftp, http, https, mailto, skype, teil nó féadfar é a fhágáil ar lár"
  },
  "psi_e3f5f0f7": { "message": "Psi" },
  "published_c944a23d": { "message": "foilsithe" },
  "published_when_302d8e23": { "message": "Foilsithe: { when }" },
  "pumpkin_904428d5": { "message": "Pumpkin" },
  "purple_7678a9fc": { "message": "Corcra" },
  "quaternions_877024e0": { "message": "Ceathrún" },
  "quiz_e0dcce8f": { "message": "Quiz" },
  "quizzes_7e598f57": { "message": "Quizeanna" },
  "rational_numbers_80ddaa4a": { "message": "Uimhreacha Réasúnacha" },
  "real_numbers_7c99df94": { "message": "Fíoruimhreacha" },
  "real_portion_of_complex_number_7dad33b5": {
    "message": "Cuid Réadach (d''Uimhir Choimpléascach)"
  },
  "record_7c9448b": { "message": "Taifead" },
  "record_upload_media_5fdce166": { "message": "Taifead/Uaslódáil Meáin" },
  "recording_98da6bda": { "message": "Ag Taifeadadh" },
  "red_8258edf3": { "message": "Dearg" },
  "relationships_6602af70": { "message": "Caidrimh" },
  "religion_icon_246e0be1": { "message": "Deilbhín Creideamh" },
  "remove_heading_style_5fdc8855": { "message": "Bain stíl ceannteidil" },
  "remove_link_d1f2f4d0": { "message": "Bain Nasc" },
  "replace_all_d3d68b3": { "message": "Athraigh Gach Rud" },
  "replace_all_findtext_with_replacetext_da574b32": {
    "message": "Athraigh { findText } ar fad le { replaceText }"
  },
  "replace_e61834a7": { "message": "Ionadaigh" },
  "replace_findtext_with_replacetext_7b5c7fb3": {
    "message": "Athraigh { findText } le { replaceText }"
  },
  "replace_with_eeff01ad": { "message": "Athraigh le" },
  "replaced_alertfindtext_with_alertreplacetext_de5c1795": {
    "message": "Athraíodh { alertFindText } le { alertReplaceText }"
  },
  "replaced_all_alertfindtext_with_alertreplacetext_83fdfe59": {
    "message": "Athraíodh { alertFindText } ar fad le { alertReplaceText }"
  },
  "reset_95a81614": { "message": "Athshocraigh" },
  "resize_ec83d538": { "message": "Athraigh méid" },
  "response_copied_to_clipboard_130d66cd": {
    "message": "Cóipeáladh an freagra chuig an ngearrthaisce"
  },
  "restore_auto_save_deccd84b": {
    "message": "Athchóirigh sábháil uathoibríoch?"
  },
  "result_index_of_max_7db5ad8b": { "message": "Toradh { index } de { max }." },
  "retry_ebd5f8ba": { "message": "Bain triail eile as" },
  "reverse_turnstile_does_not_yield_7558be06": {
    "message": "Cas an Geata Droim ar Ais (Ní Ghéilltear)"
  },
  "rho_a0244a36": { "message": "Ró" },
  "rho_variant_415245cd": { "message": "Rho (athraitheach)" },
  "rich_content_editor_2708ef21": { "message": "Eagarthóír Mórán Inneachar" },
  "rich_text_area_press_oskey_f8_for_rich_content_edi_c2f651d": {
    "message": "Réimse Téacs Saibhir. Brúigh { OSKey }+F8 le haghaidh aicearraí Eagarthóír Mórán Inneachar."
  },
  "right_71ffdc4d": { "message": "Ceart" },
  "right_align_39e7a32a": { "message": "Ailíniú ar Dheis" },
  "right_angle_bracket_d704e2d6": { "message": "Lúibín Dronuillinn" },
  "right_arrow_35e0eddf": { "message": "Saighead ar Dheis" },
  "right_arrow_with_hook_29d92d31": { "message": "Saighead Ar Dheis Le Crúca" },
  "right_ceiling_839dc744": { "message": "Uasteorainn Deas" },
  "right_curly_brace_5159d5cd": { "message": "Lúibín Slabhrach ar Dheis" },
  "right_downward_harpoon_arrow_d71b114f": {
    "message": "Saighead Harpúin Aníos ar Dheis"
  },
  "right_floor_5392d5cf": { "message": "Urlár Ar Dheis" },
  "right_to_left_9cfb092a": { "message": "Deas-go-Clé" },
  "right_upward_harpoon_arrow_f5a34c73": {
    "message": "Saighead Harpúin Anuas ar Dheis"
  },
  "rightward_arrow_32932107": { "message": "Saighead ar Dheis" },
  "rightward_pointing_triangle_60330f5c": {
    "message": "Triantán ag Pointeáil ar Dheas"
  },
  "rotate_image_90_degrees_2ab77c05": {
    "message": "Rothlaigh an íomhá -90 céim"
  },
  "rotate_image_90_degrees_6c92cd42": {
    "message": "Rothlaigh an íomhá 90 céim"
  },
  "rotation_9699c538": { "message": "Rothlú" },
  "row_fc0944a7": { "message": "Sraith" },
  "row_group_979f5528": { "message": "Grúpa sraith" },
  "sadly_the_pretty_html_editor_is_not_keyboard_acces_50da7665": {
    "message": "Faraor, níl an t-eagarthóir deas HTML inrochtana ar an méarchlár. Faigh rochtain ar an eagarthóir HTML amh anseo."
  },
  "save_11a80ec3": { "message": "Sábháil" },
  "save_copy_ca63944e": { "message": "Sábháil Cóip" },
  "save_media_cb9e786e": { "message": "Sábháil Meáin" },
  "saved_icon_maker_icons_df86e2a1": {
    "message": "Deilbhíní Déantóir Deilbhín Sábháilte"
  },
  "screen_readers_cannot_determine_what_is_displayed__6a5842ab": {
    "message": "Ní féidir le léitheoirí scáileáin a chinneadh cad a thaispeánfar in íomhá gan téacs eile, agus is minic gur teaghráin uimhreacha agus litreacha gan brí iad ainmneacha comhaid nach gcuireann síos ar an gcomhthéacs nó ar an mbrí."
  },
  "screen_readers_cannot_determine_what_is_displayed__6f1ea667": {
    "message": "Ní féidir le léitheoirí scáileáin a chinneadh cad atá ar taispeáint in íomhá gan téacs eile a chuireann síos ar ábhar agus brí na híomhá. Ba chóir go mbeadh téacs malartach simplí agus gonta."
  },
  "screen_readers_cannot_determine_what_is_displayed__a57e6723": {
    "message": "Ní féidir le léitheoirí scáileáin a chinneadh cad atá ar taispeáint in íomhá gan téacs eile a chuireann síos ar ábhar agus brí na híomhá."
  },
  "screen_readers_cannot_interpret_tables_without_the_bd861652": {
    "message": "Ní féidir le léitheoirí scáileáin táblaí a léirmhíniú gan an struchtúr cuí. Soláthraíonn ceanntásca tábla treo agus raon feidhme an ábhair."
  },
  "screen_readers_cannot_interpret_tables_without_the_e62912d5": {
    "message": "Ní féidir le léitheoirí scáileáin táblaí a léirmhíniú gan an struchtúr cuí. Déanann fortheidil tábla cur síos ar chomhthéacs agus ar thuiscint ghinearálta an tábla."
  },
  "screen_readers_cannot_interpret_tables_without_the_f0bdec0f": {
    "message": "Ní féidir le léitheoirí scáileáin táblaí a léirmhíniú gan an struchtúr cuí. Soláthraíonn ceanntásca tábla treoir agus forbhreathnú ar an ábhar."
  },
  "script_l_42a7b254": { "message": "Script L" },
  "search_280d00bd": { "message": "Cuardaigh" },
  "select_audio_source_21043cd5": { "message": "Roghnaigh foinse fuaime" },
  "select_crop_shape_d441feeb": { "message": "Roghnaigh cruth le bearradh" },
  "select_language_7c93a900": { "message": "Roghnaigh Teanga" },
  "select_video_source_1b5c9dbe": { "message": "Roghnaigh foinse físeáin" },
  "selected_274ce24f": { "message": "Roghnaithe" },
  "selected_linkfilename_c093b1f2": {
    "message": "Roghnaithe { linkFileName }"
  },
  "selection_b52c4c5e": { "message": "Roghnú" },
  "set_header_scope_8c548f40": {
    "message": "Socraigh raon feidhme an cheanntásca"
  },
  "set_minus_b46e9b88": { "message": "Socraigh Lúide" },
  "set_table_header_cfab13a0": { "message": "Socraigh ceanntásca tábla" },
  "sharp_music_ab956814": { "message": "Géar (Ceol)" },
  "shift_arrows_4d5785fe": { "message": "SaigheadaSHIFT+" },
  "shift_o_to_open_the_pretty_html_editor_55ff5a31": {
    "message": "Shift-O chun an t-eagarthóir deas html a oscailt."
  },
  "shortcut_911d6255": { "message": "Aicearra" },
  "show_all_967a90f0": { "message": "Taispeáin gach rud" },
  "show_audio_options_b489926b": { "message": "Taispeáin roghanna fuaime" },
  "show_image_options_1e2ecc6b": { "message": "Taispeáin roghanna íomhá" },
  "show_link_options_545338fd": { "message": "Taispeáin roghanna naisc" },
  "show_studio_media_options_a0c748c6": {
    "message": "Taispeáin roghanna meáin Stiúideo"
  },
  "show_video_options_6ed3721a": { "message": "Taispeáin roghanna físeáin" },
  "sighted_users_browse_web_pages_quickly_looking_for_1d4db0c1": {
    "message": "Déanann úsáideoirí radharcacha leathanaigh ghréasáin a bhrabhsáil go tapa, ag lorg ceannteidil mhóra nó chló trom. Bíonn úsáideoirí léitheoirí scáileáin ag brath ar cheanntásca chun tuiscint a fháil ar an gcomhthéacs. Ba cheart go n-úsáidfeadh ceanntásca an struchtúr ceart."
  },
  "sighted_users_browse_web_pages_quickly_looking_for_ade806f5": {
    "message": "Déanann úsáideoirí radharcacha leathanaigh ghréasáin a bhrabhsáil go tapa, ag lorg ceannteidil mhóra nó chló trom. Bíonn úsáideoirí léitheoirí scáileáin ag brath ar cheanntásca chun tuiscint a fháil ar an gcomhthéacs. Ba cheart go mbeadh ceanntásca gonta laistigh den struchtúr cuí."
  },
  "sigma_5c35e553": { "message": "Sigma" },
  "sigma_variant_8155625": { "message": "Sigma (athraitheach)" },
  "single_color_image_4e5d4dbc": { "message": "Íomhá Dath Aonair" },
  "single_color_image_color_95fa9a87": { "message": "Dath Íomhá Dath Amháin" },
  "size_b30e1077": { "message": "Tomhas" },
  "size_of_caption_file_is_greater_than_the_maximum_m_bff5f86e": {
    "message": "Tá méid an chomhaid fotheidil níos mó ná an t-uasmhéid { max } kb méid comhaid ceadaithe."
  },
  "small_b070434a": { "message": "Beag" },
  "solid_circle_9f061dfc": { "message": "Ciorcal Soladach" },
  "something_went_wrong_89195131": { "message": "Chuaigh rud eigin mícheart." },
  "something_went_wrong_accessing_your_webcam_6643b87e": {
    "message": "Tharla earráid le rochtain a fháil ar do cheamara gréasáin."
  },
  "something_went_wrong_and_i_don_t_know_what_to_show_e0c54ec8": {
    "message": "Chuaigh rud éigin mícheart agus níl a fhios agam cad le taispeáint duit."
  },
  "something_went_wrong_check_your_connection_reload__c7868286": {
    "message": "Chuaigh rud eigin mícheart. Seiceáil do cheangal, athlódáil an leathanach agus bain triail eile as."
  },
  "something_went_wrong_d238c551": { "message": "Chuaigh rud eigin mícheart" },
  "something_went_wrong_while_sharing_your_screen_8de579e5": {
    "message": "Tharla earráid agus do scáileán á roinnt."
  },
  "sort_by_e75f9e3e": { "message": "Sórtáil de réir" },
  "spades_suit_b37020c2": { "message": "Spéireata (Dath)" },
  "square_511eb3b3": { "message": "Cearnóg" },
  "square_cap_9ec88646": { "message": "Ceap Cearnóg" },
  "square_cup_b0665113": { "message": "Corn Cearnóg" },
  "square_root_e8bcbc60": { "message": "Fréamh Chearnach" },
  "square_root_symbol_d0898a53": { "message": "Siombail Fréamh Chearnach" },
  "square_subset_17be67cb": { "message": "Fothacar Cearnach" },
  "square_subset_strict_7044e84f": { "message": "Fothacar Cearnach (Dian)" },
  "square_superset_3be8dae1": { "message": "Sárthacar Cearnach" },
  "square_superset_strict_fa4262e4": { "message": "Sárthacar Cearnach (Dian)" },
  "square_unordered_list_b15ce93b": { "message": "cearnaigh liosta gan ordú" },
  "star_8d156e09": { "message": "Cuir réiltín le" },
  "start_over_f7552aa9": { "message": "Tosaigh arís" },
  "start_recording_9a65141a": { "message": "Tosaigh ag Taifeadadh" },
  "steel_blue_14296f08": { "message": "Cruach Ghorm" },
  "studio_media_options_ee504361": { "message": "Roghanna Meáin Stiúideo" },
  "studio_media_options_tray_cfb94654": {
    "message": "Tráidire Roghanna Meáin Stiúideo"
  },
  "styles_2aa721ef": { "message": "Stíleanna" },
  "submit_a3cc6859": { "message": "Cuir isteach" },
  "submitting_b90fac62": { "message": "Á chur isteach..." },
  "subscript_59744f96": { "message": "Foscript" },
  "subset_19c1a92f": { "message": "Fothacar" },
  "subset_strict_8d8948d6": { "message": "Fothacar (dian)" },
  "succeeds_9cc31be9": { "message": "Éiríonn sé" },
  "succeeds_equal_158e8c3a": { "message": "Éiríonn sé Comhionann" },
  "sum_b0842d31": { "message": "Suim" },
  "superscript_8cb349a2": { "message": "Forscript" },
  "superscript_and_subscript_37f94a50": {
    "message": "Forscript agus Foscript"
  },
  "superset_c4db8a7a": { "message": "Sárthacar" },
  "superset_strict_c77dd6d2": { "message": "Sárthacar (Dian)" },
  "supported_file_types_srt_or_webvtt_7d827ed": {
    "message": "Cineálacha comhaid tacaithe: SRT nó WebVTT"
  },
  "switch_to_pretty_html_editor_a3cee15f": {
    "message": "Athraigh go Eagarthóir HTML deas"
  },
  "switch_to_raw_html_editor_f970ae1a": {
    "message": "Athraigh go Eagarthóir HTML amh"
  },
  "switch_to_the_html_editor_146dfffd": {
    "message": "Athraigh go dtí an eagarthóir html"
  },
  "switch_to_the_rich_text_editor_63c1ecf6": {
    "message": "Athraigh go dtí an eagarthóir téacs saibhir"
  },
  "syllabus_f191f65b": { "message": "Siollabas" },
  "system_audio_allowed_b2508f8c": { "message": "Córas Fuaime Ceadaithe" },
  "system_audio_disabled_c177bd13": { "message": "Córas Fuaime Díchumasaithe" },
  "tab_arrows_4cf5abfc": { "message": "TÁB/Saigheada" },
  "table_header_starting_with_start_ffcabba6": {
    "message": "Ceanntásc tábla ag tosú le { start }"
  },
  "table_starting_with_start_e7232848": {
    "message": "Tábla ag tosú le { start }"
  },
  "tables_headers_should_specify_scope_5abf3a8e": {
    "message": "Ba cheart raon feidhme a shonrú i gceanntáblaí."
  },
  "tables_should_include_a_caption_describing_the_con_e91e78fc": {
    "message": "Ba chóir go mbeadh fortheideal ag cur síos ar a bhfuil sa tábla ag na táblaí."
  },
  "tables_should_include_at_least_one_header_48779eac": {
    "message": "Ba chóir go mbeadh ceanntásc amháin ar a laghad sna táblaí."
  },
  "tau_880974b7": { "message": "Tau" },
  "teal_f729a294": { "message": "Teal" },
  "text_7f4593da": { "message": "Téacs" },
  "text_background_color_16e61c3f": { "message": "Dath Téacs Cúlra " },
  "text_color_acf75eb6": { "message": "Dath Téacs" },
  "text_is_difficult_to_read_without_sufficient_contr_69e62bd6": {
    "message": "Is deacair an téacs a léamh gan codarsnacht leordhóthanach idir an téacs agus an cúlra, go háirithe dóibh siúd le lagamhairc."
  },
  "text_larger_than_18pt_or_bold_14pt_should_display__5c364db6": {
    "message": "Ba chóir go mbeadh íoschóimheas codarsnachta 3:1 ag téacs atá níos mó ná 18pt (nó trom 14pt)."
  },
  "text_optional_384f94f7": { "message": "Téacs (roghnach)" },
  "text_position_8df8c162": { "message": "Áit Téacs" },
  "text_size_887c2f6": { "message": "Tomhas an Téacs" },
  "text_smaller_than_18pt_or_bold_14pt_should_display_aaffb22b": {
    "message": "Ba chóir go mbeadh íoschóimheas codarsnachta 4.5:1 ag téacs atá níos lú ná 18pt (nó trom 14pt)."
  },
  "the_document_preview_is_currently_being_processed__7d9ea135": {
    "message": "Tá réamhamharc an doiciméid á phróiseáil faoi láthair. Bain triail eile as ar ball."
  },
  "the_first_heading_on_a_page_should_be_an_h2_859089f2": {
    "message": "Ba chóir gur H2 an chéad cheannteideal ar leathanach."
  },
  "the_following_content_is_partner_provided_ed1da756": {
    "message": "Cuirtear an t-ábhar seo a leanas ar fáil ó chomhpháirtí"
  },
  "the_material_is_in_the_public_domain_279c39a3": {
    "message": "Tá an t-ábhar sa fhearann poiblí"
  },
  "the_material_is_licensed_under_creative_commons_3242cb5e": {
    "message": "Tá an t-ábhar ceadúnaithe faoi Creative Commons"
  },
  "the_material_is_subject_to_an_exception_e_g_fair_u_a39c8ca2": {
    "message": "Tá an t-ábhar faoi réir eisceachta - m.sh. Úsáid Chothromr, an ceart chun luachan, nó daoine eile faoi dhlíthe cóipchirt infheidhmithe"
  },
  "the_preceding_content_is_partner_provided_d753928c": {
    "message": "Cuirtear an t-ábhar roimhe seo ar fáil ó chomhpháirtí"
  },
  "the_pretty_html_editor_is_not_keyboard_accessible__d6d5d2b": {
    "message": "Níl an t-eagarthóir deas html inrochtana ar an méarchlár. Brúigh Shift O chun an t-eagarthóir html amh a oscailt."
  },
  "therefore_d860e024": { "message": "Dá bhrí sin" },
  "theta_ce2d2350": { "message": "Téite" },
  "theta_variant_fff6da6f": { "message": "Téite (Leagan Malartach)" },
  "thick_downward_arrow_b85add4c": { "message": "Saighead Tiubh Aníos" },
  "thick_left_arrow_d5f3e925": { "message": "Saighead Tiubh Chlé" },
  "thick_leftward_arrow_6ab89880": { "message": "Saighead Tiubh Chlé" },
  "thick_right_arrow_3ed5e8f7": { "message": "Saighead ar Dheis Tiubh" },
  "thick_rightward_arrow_a2e1839e": { "message": "Saighead Aníos Tiubh" },
  "thick_upward_arrow_acd20328": { "message": "Saigheas Anuas Tiubh" },
  "this_document_cannot_be_displayed_within_canvas_7aba77be": {
    "message": "Ní féidir an doiciméad seo a thaispeáint laistigh de Canvas."
  },
  "this_equation_cannot_be_rendered_in_basic_view_9b6c07ae": {
    "message": "Ní féidir an chothromóid seo a sholáthar i Bun-Amharc."
  },
  "this_image_is_currently_unavailable_25c68857": {
    "message": "Níl an íomhá seo ar fáil faoi láthair"
  },
  "though_your_video_will_have_the_correct_title_in_t_90e427f3": {
    "message": "Cé go mbeidh an teideal ceart ar do fhíseán sa bhrabhsálaí, níor éirigh linn é a nuashonrú sa bhunachar sonraí."
  },
  "timebar_a4d18443": { "message": "Barra ama" },
  "title_ee03d132": { "message": "Teideal" },
  "to_be_posted_when_d24bf7dc": { "message": "Le Postáil: { when }" },
  "to_do_when_2783d78f": { "message": "Le Déanamh: { when }" },
  "toggle_summary_group_413df9ac": {
    "message": "Scoránaigh grúpa { summary }"
  },
  "toggle_tooltip_d3b7cb86": { "message": "Scoránaigh ToolTip" },
  "tools_2fcf772e": { "message": "Uirlisí" },
  "top_66e0adb6": { "message": "Barr" },
  "tray_839df38a": { "message": "Tráidire" },
  "triangle_6072304e": { "message": "Triantán" },
  "turnstile_yields_f9e76df1": { "message": "Casadh (Toradh)" },
  "type_control_f9_to_access_image_options_text_a47e319f": {
    "message": "clóscríobh Control F9 chun rochtain a fháil ar roghanna íomhá. { text }"
  },
  "type_control_f9_to_access_link_options_text_4ead9682": {
    "message": "clóscríobh Control F9 F9 chun rochtain a fháil ar roghanna nasc. { text }"
  },
  "type_control_f9_to_access_table_options_text_92141329": {
    "message": "clóscríobh Control F9 chun rochtain a fháil ar roghanna tábla. { text }"
  },
  "unable_to_determine_resource_selection_url_7867e060": {
    "message": "Ní féidir an url roghnú acmhainní a chinneadh"
  },
  "union_e6b57a53": { "message": "Aontas" },
  "unpublished_dfd8801": { "message": "neamhfhoilsithe" },
  "untitled_16aa4f2b": { "message": "Gan teideal" },
  "untitled_efdc2d7d": { "message": "gan teideal" },
  "up_and_left_diagonal_arrow_e4a74a23": {
    "message": "Saighead Trasnánach Suas Agus ar Chlé"
  },
  "up_and_right_diagonal_arrow_935b902e": {
    "message": "Saighead Trasnánach Suas Agus Ar Dheas"
  },
  "up_c553575d": { "message": "Suas" },
  "updated_link_a827e441": { "message": "Nasc nuashonraithe" },
  "upload_document_253f0478": { "message": "Uaslódáil Doiciméad" },
  "upload_file_fd2361b8": { "message": "Uaslódáil Comhad" },
  "upload_image_6120b609": { "message": "Uaslódáil Íomhá" },
  "upload_media_ce31135a": { "message": "Uaslódáil Meáin" },
  "upload_record_media_e4207d72": { "message": "Uaslódáil/Taifead Meáin" },
  "uploading_19e8a4e7": { "message": "Ag uaslódáil" },
  "uppercase_alphabetic_ordered_list_3f5aa6b2": {
    "message": "liosta in ord aibítre i gcás uachtair"
  },
  "uppercase_delta_d4f4bc41": { "message": "Deilte cáis uachtair" },
  "uppercase_gamma_86f492e9": { "message": "Gáma cáis uachtair" },
  "uppercase_lambda_c78d8ed4": { "message": "Lambda cáis uachtair" },
  "uppercase_omega_8aedfa2": { "message": "Óimige cáis uachtair" },
  "uppercase_phi_caa36724": { "message": "Fí cáis uachtair" },
  "uppercase_pi_fcc70f5e": { "message": "Pí cáis uachtair" },
  "uppercase_psi_6395acbe": { "message": "Sí cáis uachtair" },
  "uppercase_roman_numeral_ordered_list_853f292b": {
    "message": "liosta ordaithe uimhreacha Rómhánacha cáis uachtair"
  },
  "uppercase_sigma_dbb70e92": { "message": "Sigme cáis uachtair" },
  "uppercase_theta_49afc891": { "message": "Téite cáis uachtair " },
  "uppercase_upsilon_8c1e623e": { "message": "Upsalón cáis uachtair" },
  "uppercase_xi_341e8556": { "message": "Xi cáis uachtair" },
  "upsilon_33651634": { "message": "Upsalón" },
  "upward_and_downward_pointing_arrow_fa90a918": {
    "message": "Saighead ag Pointeáil Anuas Agus Aníos"
  },
  "upward_and_downward_pointing_arrow_thick_d420fdef": {
    "message": "Saighead ag Pointeáil Anuas Agus Aníos (Tiubh)"
  },
  "upward_arrow_9992cb2d": { "message": "Saighead Anuas" },
  "upward_pointing_triangle_d078d7cb": {
    "message": "Triantán ag Pointeáil Anuas"
  },
  "url_22a5f3b8": { "message": "URL" },
  "usage_right_ff96f3e2": { "message": "Ceart Úsáide:" },
  "usage_rights_required_5fe4dd68": {
    "message": "Cearta Úsáide (riachtanach)"
  },
  "use_arrow_keys_to_navigate_options_2021cc50": {
    "message": "Bain úsáid as saigheadeochracha chun roghanna a nascleanúint."
  },
  "use_arrow_keys_to_select_a_shape_c8eb57ed": {
    "message": "Bain úsáid as saigheadeochracha chun cruth a roghnú."
  },
  "use_arrow_keys_to_select_a_size_699a19f4": {
    "message": "Bain úsáid as saigheadeochracha chun méid a roghnú."
  },
  "use_arrow_keys_to_select_a_text_position_72f9137c": {
    "message": "Bain úsáid as saigheadeochracha chun áit téacs a roghnú."
  },
  "use_arrow_keys_to_select_a_text_size_65e89336": {
    "message": "Úsáid na saigheadeochracha chun tomhas téacs a roghnú."
  },
  "use_arrow_keys_to_select_an_outline_size_e009d6b0": {
    "message": "Bain úsáid as saigheadeochracha chun imlíne a roghnú."
  },
  "used_by_screen_readers_to_describe_the_content_of__4f14b4e4": {
    "message": "Úsáidte ag léitheoirí scáileáin chun cur síos a dhéanamh ar ábhar an { TYPE }"
  },
  "used_by_screen_readers_to_describe_the_content_of__b1e76d9e": {
    "message": "Úsáidte ag léitheoirí scáileáin chun cur síos a dhéanamh ar ábhar íomhá"
  },
  "used_by_screen_readers_to_describe_the_video_37ebad25": {
    "message": "Úsáidte ag léitheoirí scáileáin chun cur síos a dhéanamh ar an bhfíseán"
  },
  "user_documents_c206e61f": { "message": "Doiciméid Úsáideora" },
  "user_files_78e21703": { "message": "Comhaid Úsáideoir" },
  "user_images_b6490852": { "message": "Íomhánna Úsáideora" },
  "user_media_14fbf656": { "message": "Meáin Úsáideora" },
  "vector_notation_cf6086ab": { "message": "Veicteoir (Nodaireacht)" },
  "vertical_bar_set_builder_notation_4300495f": {
    "message": "Barra Ingearach (Socraigh Nodaireacht Tógálaí)"
  },
  "vertical_dots_bfb21f14": { "message": "Poncanna Ingearach" },
  "video_options_24ef6e5d": { "message": "Roghanna Físeáin" },
  "video_options_tray_3b9809a5": { "message": "Tráidire Roghanna Físeáin" },
  "video_player_b371005": { "message": "Fís-Seinnteoir" },
  "video_player_for_9e7d373b": { "message": "Fís-seinnteoir le haghaidh " },
  "video_player_for_title_ffd9fbc4": {
    "message": "Fís-Seinnteoir le haghaidh { title }"
  },
  "view_all_e13bf0a6": { "message": "Féach ar Gach" },
  "view_ba339f93": { "message": "Féach" },
  "view_description_30446afc": { "message": "Féach ar an gcur síos" },
  "view_keyboard_shortcuts_34d1be0b": {
    "message": "Féach ar aicearraí méarchláir"
  },
  "view_title_description_67940918": {
    "message": "Féach ar chuir síos { title }"
  },
  "view_word_and_character_counts_a743dd0c": {
    "message": "Féach ar líon na bhfocal agus na gcarachtar"
  },
  "waiting_for_response_1efd0c50": { "message": "Ag feitheamh ar fhreagra" },
  "we_couldn_t_detect_a_working_microphone_connected__ceb71c40": {
    "message": "Níorbh fhéidir linn micreafón a bhí ag obair ceangailte le do ghléas a bhrath."
  },
  "we_couldn_t_detect_a_working_webcam_connected_to_y_6715cc4": {
    "message": "Níorbh fhéidir linn ceamara gréasáin oibre ceangailte le do ghléas a bhrath."
  },
  "we_couldn_t_detect_a_working_webcam_or_microphone__263b6674": {
    "message": "Níorbh fhéidir linn ceamara gréasáin nó micreafón a bhí ag obair ceangailte le do ghléas a bhrath."
  },
  "webcam_disabled_30c66986": { "message": "Ceamara Gréasáin Díchumasaithe" },
  "webcam_fe91b20f": { "message": "Ceamara gréasáin" },
  "webpages_should_only_have_a_single_h1_which_is_aut_dc99189e": {
    "message": "Níor cheart ach H1 amháin a bheith ag leathanaigh ghréasáin, a úsáideann Teideal an leathanaigh go huathoibríoch. Ba cheart gur H2 an chéad cheannteideal i d’ábhar."
  },
  "what_would_you_like_to_do_6dc0d541": {
    "message": "Céard ba mhaith leat a dhéanamh?"
  },
  "when_markup_is_used_that_visually_formats_items_as_f941fc1b": {
    "message": "Nuair a úsáidtear marcáil a dhéanann formáid amhairc ar mhíreanna mar liosta ach nach léiríonn an gaol liosta, d’fhéadfadh go mbeadh deacracht ag úsáideoirí an fhaisnéis a nascleanúint."
  },
  "white_87fa64fd": { "message": "Bán" },
  "why_523b3d8c": { "message": "Cén fáth" },
  "width_492fec76": { "message": "Leithead" },
  "width_and_height_must_be_numbers_110ab2e3": {
    "message": "Caithfidh leithead agus airde a bheith ina n-uimhreacha"
  },
  "width_x_height_px_ff3ccb93": { "message": "{ width } x { height }px" },
  "wiki_home_9cd54d0": { "message": "Baile Wiki" },
  "word_count_c77fe3a6": { "message": "Comhaireamh Focal" },
  "words_b448b7d5": { "message": "Focail" },
  "wreath_product_200b38ef": { "message": "Táirge Wreath" },
  "writing_assistant_a30ac16a": { "message": "Cúntóir Scríbhneoireachta" },
  "xi_149681d0": { "message": "Xí" },
  "yes_dde87d5": { "message": "Tá" },
  "you_have_unsaved_changes_in_the_icon_maker_tray_do_e8cf5f1b": {
    "message": "Tá athruithe gan sábháil agat sa tráidire Déantóir Deilbhín. Ar mhaith leat leanúint ar aghaidh gan na hathruithe seo a shábháil?"
  },
  "you_may_need_to_adjust_additional_headings_to_main_975f0eee": {
    "message": "Seans go mbeidh ort ceannteidil bhreise a choigeartú chun ordlathas na leathanach a choinneáil."
  },
  "you_may_not_upload_an_empty_file_11c31eb2": {
    "message": "Ní féidir leat comhad folamh a uaslódáil."
  },
  "your_image_has_been_compressed_for_icon_maker_imag_2e45cd91": {
    "message": "Tá d''íomhá comhbhrúite le haghaidh Icon Maker. Ní dhéanfar íomhánna níos lú ná { size } KB a chomhbhrú."
  },
  "your_microphone_is_blocked_in_the_browser_settings_42af0ddc": {
    "message": "Tá bac ar do mhicreafón i socruithe an bhrabhsálaí."
  },
  "your_webcam_and_microphone_are_blocked_in_the_brow_73357dc6": {
    "message": "Tá bac ar do cheamara gréasáin agus micreafón i socruithe an bhrabhsálaí."
  },
  "your_webcam_is_blocked_in_the_browser_settings_7f638128": {
    "message": "Tá bac ar do cheamara gréasáin i socruithe an bhrabhsálaí."
  },
  "your_webcam_may_already_be_in_use_6cd64c25": {
    "message": "Seans go bhfuil do ceamara gréasáin in úsáid cheana féin."
  },
  "zeta_5ef24f0e": { "message": "Zeta" },
  "zoom_f3e54d69": { "message": "Súmáil" },
  "zoom_in_image_bb97d4f": { "message": "Súmáil isteach san íomhá" },
  "zoom_out_image_d0a0a2ec": { "message": "Súmáil amach ón íomhá" }
}


formatMessage.addLocale({ga: locale})

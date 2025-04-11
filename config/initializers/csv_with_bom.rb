Rails.application.config.to_prepare do
  CSVWithI18n.singleton_class.class_eval do
    # 既存のメソッドがあるか確認
    if method_defined?(:include_bom?)
      alias_method :original_include_bom?, :include_bom?
      
      def include_bom?(user, encoding)
        encoding == "UTF-8" ? true : original_include_bom?(user, encoding)
      end
    else
      # メソッドが存在しない場合は新たに定義
      def include_bom?(user, encoding)
        encoding == "UTF-8"
      end
    end
  end
end
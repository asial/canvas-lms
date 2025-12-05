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

# config/initializers/csv_with_bom.rb
module CSVWithBOM
  module GenerateWithBOM
    def generate(str = nil, **options, &block)
      result = super(str, **options, &block)

      if result.is_a?(String)
        result.prepend("\uFEFF") unless result.start_with?("\uFEFF")
      else
        Rails.logger.warn("[CSVWithBOM] CSV.generate returned non-String (#{result.class}) — skipping BOM prepend")
      end

      result
    rescue => e
      Rails.logger.error("[CSVWithBOM] Failed to generate CSV with BOM: #{e.class} - #{e.message}")
      raise
    end
  end
end

CSV.singleton_class.prepend(CSVWithBOM::GenerateWithBOM)
